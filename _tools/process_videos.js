const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ffmpeg = path.join(__dirname, 'ffmpeg.exe');

// Ensure backup dirs
const backupCompressed = path.join(__dirname, '..', '_originals', 'assets', 'compressed');
const backupRealestate = path.join(__dirname, '..', '_originals', 'assets', 'realestate');
fs.mkdirSync(backupCompressed, { recursive: true });
fs.mkdirSync(backupRealestate, { recursive: true });

const compressedDir = path.join(__dirname, '..', 'public', 'assets', 'compressed');
const realestateDir = path.join(__dirname, '..', 'public', 'assets', 'realestate');
const heroDir = path.join(__dirname, '..', 'public', 'assets', 'hero');
fs.mkdirSync(heroDir, { recursive: true });

// Step 1: Backup and process compressed videos (Hero marquee background videos)
const compressedFiles = fs.readdirSync(compressedDir).filter(f => f.endsWith('.mp4') && !f.startsWith('temp_'));

console.log('--- Processing Hero Background Videos ---');
for (const file of compressedFiles) {
  const srcPath = path.join(compressedDir, file);
  const backupPath = path.join(backupCompressed, file);

  // Backup original if not already backed up
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(srcPath, backupPath);
    console.log(`Backed up original: ${file} (${fs.statSync(backupPath).size} bytes)`);
  }

  const baseName = path.basename(file, '.mp4');
  const tempMp4 = path.join(compressedDir, `temp_${file}`);
  const webmPath = path.join(compressedDir, `${baseName}.webm`);
  const posterPath = path.join(compressedDir, `${baseName}.webp`);

  console.log(`Processing ${file}...`);

  // Extract poster frame (under 50 KB)
  spawnSync(ffmpeg, [
    '-y',
    '-ss', '00:00:00.5',
    '-i', backupPath,
    '-vframes', '1',
    '-vf', 'scale=360:640:force_original_aspect_ratio=decrease',
    '-vcodec', 'libwebp',
    '-q:v', '70',
    posterPath
  ], { stdio: 'inherit' });

  // Transcode to optimized H.264 720p, CRF 28, faststart, audio stripped (-an), max 7 seconds loop, 24fps
  spawnSync(ffmpeg, [
    '-y',
    '-i', backupPath,
    '-t', '7',
    '-r', '24',
    '-vf', 'scale=\'min(406,iw)\':\'min(720,ih)\':force_original_aspect_ratio=decrease,pad=ceil(iw/2)*2:ceil(ih/2)*2',
    '-c:v', 'libx264',
    '-crf', '28',
    '-preset', 'fast',
    '-pix_fmt', 'yuv420p',
    '-an',
    '-movflags', '+faststart',
    tempMp4
  ], { stdio: 'inherit' });

  // Transcode to WebM (VP9) fast realtime mode
  spawnSync(ffmpeg, [
    '-y',
    '-i', backupPath,
    '-t', '7',
    '-r', '24',
    '-vf', 'scale=\'min(406,iw)\':\'min(720,ih)\':force_original_aspect_ratio=decrease,pad=ceil(iw/2)*2:ceil(ih/2)*2',
    '-c:v', 'libvpx-vp9',
    '-crf', '36',
    '-b:v', '0',
    '-cpu-used', '5',
    '-row-mt', '1',
    '-deadline', 'realtime',
    '-an',
    webmPath
  ], { stdio: 'inherit' });

  if (fs.existsSync(tempMp4)) {
    if (fs.existsSync(srcPath)) fs.unlinkSync(srcPath);
    fs.renameSync(tempMp4, srcPath);
    console.log(`Optimized ${file}: MP4 ${fs.statSync(srcPath).size} bytes | WebM ${fs.statSync(webmPath).size} bytes | Poster ${fs.statSync(posterPath).size} bytes`);
  }
}

// Step 2: Backup and process Real Estate Videos
console.log('\n--- Processing Real Estate Videos ---');
const realestateFiles = fs.readdirSync(realestateDir).filter(f => f.endsWith('.mp4') && !f.startsWith('temp_'));

for (let idx = 0; idx < realestateFiles.length; idx++) {
  const file = realestateFiles[idx];
  const srcPath = path.join(realestateDir, file);
  const backupPath = path.join(backupRealestate, file);

  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(srcPath, backupPath);
    console.log(`Backed up original realestate: ${file} (${fs.statSync(backupPath).size} bytes)`);
  }

  const baseName = path.basename(file, '.mp4');
  const tempMp4 = path.join(realestateDir, `temp_${file}`);
  const webmPath = path.join(realestateDir, `${baseName}.webm`);
  const posterPath = path.join(realestateDir, `poster${idx + 1}.webp`);
  const legacyPosterPath = path.join(realestateDir, `${baseName}.webp`);
  const clipJpgPath = path.join(heroDir, `clip${idx + 2}.jpg`);

  console.log(`Processing Real Estate: ${file}...`);

  // Extract poster frame (under 50 KB)
  spawnSync(ffmpeg, [
    '-y',
    '-ss', '00:00:01.0',
    '-i', backupPath,
    '-vframes', '1',
    '-vf', 'scale=450:800:force_original_aspect_ratio=decrease',
    '-vcodec', 'libwebp',
    '-q:v', '75',
    posterPath
  ], { stdio: 'inherit' });
  fs.copyFileSync(posterPath, legacyPosterPath);

  // Also create clip2.jpg, clip3.jpg, clip4.jpg in heroDir so legacy 404s resolve
  spawnSync(ffmpeg, [
    '-y',
    '-ss', '00:00:01.0',
    '-i', backupPath,
    '-vframes', '1',
    '-vf', 'scale=450:800:force_original_aspect_ratio=decrease',
    '-q:v', '3',
    clipJpgPath
  ], { stdio: 'inherit' });

  // Transcode Real Estate MP4: 720p vertical (max 720x1280), CRF 28, faststart, 24fps
  spawnSync(ffmpeg, [
    '-y',
    '-i', backupPath,
    '-r', '24',
    '-vf', 'scale=\'min(720,iw)\':\'min(1280,ih)\':force_original_aspect_ratio=decrease,pad=ceil(iw/2)*2:ceil(ih/2)*2',
    '-c:v', 'libx264',
    '-crf', '28',
    '-preset', 'fast',
    '-c:a', 'aac',
    '-b:a', '128k',
    '-movflags', '+faststart',
    tempMp4
  ], { stdio: 'inherit' });

  // Transcode Real Estate WebM:
  spawnSync(ffmpeg, [
    '-y',
    '-i', backupPath,
    '-r', '24',
    '-vf', 'scale=\'min(720,iw)\':\'min(1280,ih)\':force_original_aspect_ratio=decrease,pad=ceil(iw/2)*2:ceil(ih/2)*2',
    '-c:v', 'libvpx-vp9',
    '-crf', '36',
    '-b:v', '0',
    '-cpu-used', '5',
    '-row-mt', '1',
    '-deadline', 'realtime',
    '-c:a', 'libopus',
    '-b:a', '96k',
    webmPath
  ], { stdio: 'inherit' });

  if (fs.existsSync(tempMp4)) {
    if (fs.existsSync(srcPath)) fs.unlinkSync(srcPath);
    fs.renameSync(tempMp4, srcPath);
    console.log(`Optimized Real Estate ${file}: MP4 ${fs.statSync(srcPath).size} bytes | WebM ${fs.statSync(webmPath).size} bytes | Poster ${fs.statSync(posterPath).size} bytes`);
  }
}

console.log('Video optimization completed successfully!');
