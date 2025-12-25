---
title: Troubleshooting
description: Common issues and fixes.
---

### Common Issues

**Music doesn't play**
* Check debug log files: `ytstderr.log` and `ffstderr.log`
  * If you specified a debug directory with `-d`, logs are in that directory.
  * If you set it in the config file:
    * **Linux:** `~/.config/clispot/config.json`
    * **Windows:** `%AppData%\clispot\config.json`
    * **macOS:** `~/Library/Application Support/clispot/config.json`
  * Otherwise, logs are in the default location:
    * **Linux/macOS:** `~/.local/state/clispot/logs` (or `$XDG_STATE_HOME/clispot/logs`)
    * **Windows:** `%AppData%\clispot\logs`

**yt-dlp or ffmpeg not found**
* Make sure you have yt-dlp and ffmpeg installed and in your PATH

**yt-dlp slow download**
* yt-dlp is sometimes slow to download audio files, if have slow internet connection we don't have anything to help you with that

