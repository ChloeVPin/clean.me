const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building Clean.me application...\n');

// Step 1: Build Tailwind CSS
console.log('📦 Building Tailwind CSS...');
try {
    execSync('npx tailwindcss -i input.css -o styles.css --minify', { stdio: 'inherit' });
    console.log('✅ Tailwind CSS built successfully\n');
} catch (error) {
    console.error('❌ Failed to build Tailwind CSS:', error.message);
    process.exit(1);
}

// Step 2: Build Electron app
console.log('🔨 Building Electron application...');
try {
    execSync('npx electron-builder', { stdio: 'inherit' });
    console.log('✅ Electron app built successfully\n');
} catch (error) {
    console.error('❌ Failed to build Electron app:', error.message);
    process.exit(1);
}

console.log('🎉 Build completed! Check the dist/ folder for the installer.');
console.log('📁 You can now distribute the .exe file to users.');
