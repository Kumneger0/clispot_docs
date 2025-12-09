---
title: Troubleshooting
description: Common issues and fixes.
---

### Common Issues

**Music doesn't play**
* Check that `yt-dlp` and `ffmpeg` are installed and in your PATH
* Verify your internet connection
* Check debug log files: `ytstderr.log` and `ffstderr.log`
  * If you specified a debug directory with `-d`, logs are in that directory
  * Otherwise, logs are in `~/.clispot/logs` directory

**Authentication fails**
* Ensure port 9292 is not blocked by a firewall
* Check that your browser can open automatically (or manually open the URL shown)
