---
title: Troubleshooting
description: Common issues and fixes.
---

### Common Issues

**Music doesn't play**
* Check debug log files: `ytstderr.log` and `ffstderr.log`
  * If you specified a debug directory with `-d`, logs are in that directory or if you set it in config file which is at $XDG_CONFIG_HOME/clispot/config.json
  * Otherwise, logs are in $XDG_STATE_HOME/clispot/logs

**yt-dlp or ffmpeg not found**
* Make sure you have yt-dlp and ffmpeg installed and in your PATH

**yt-dlp slow download**
* yt-dlp is sometimes slow to download audio files, if have slow internet connection we don't have anything to help you with that

