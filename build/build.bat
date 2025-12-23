@echo off
echo Building Clean.me...
echo.

REM Navigate to project root (parent directory)
cd /d "%~dp0.."
echo Current directory: %CD%

echo Installing dependencies...
call npm install
if errorlevel 1 goto error

echo.
echo Building CSS...
call npx tailwindcss -i src/input.css -o src/styles.css --minify
if errorlevel 1 goto error

echo.
echo Building Electron app...
call npx electron-builder
if errorlevel 1 goto error

echo.
echo ✅ Build completed successfully!
echo Check the dist/ folder for the installer.
pause
goto end

:error
echo.
echo ❌ Build failed!
pause

:end
