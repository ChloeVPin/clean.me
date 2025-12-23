# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | Active Support     |

## What We Clean (Safe Operations)

Clean.me only performs safe cleanup operations:

### Safe to Clean
- Temporary files (`%TEMP%`, `C:\Windows\Temp`)
- Browser cache and cookies
- Application logs and cache
- Windows prefetch files
- Crash dumps and error reports
- Recycle bin contents

### Never Touched
- User documents and files
- Installed programs
- System registry (critical keys)
- Active system files
- Program Files directories

## Security Features

- **Read-only operations**: We only read system information, never modify critical files
- **Safe path validation**: All cleanup paths are pre-validated for safety
- **Error handling**: Graceful handling of permission errors
- **No network access**: The application works entirely offline

## Reporting Security Vulnerabilities

If you discover a security vulnerability, please:

1. **Do not** open a public issue
2. Open a private issue or contact via repository discussions
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

## Administrator Privileges

Clean.me may request administrator privileges to:
- Access system temporary directories
- Clear system-level cache files
- Empty recycle bin
- Run Windows Disk Cleanup

**We never:**
- Modify system settings
- Install additional software
- Access personal files
- Connect to the internet

## Verification

You can verify the safety of our cleanup operations by:
1. Reviewing the source code in `src/cleanup.js`
2. Testing in a virtual machine
3. Checking the list of cleaned paths in our documentation
