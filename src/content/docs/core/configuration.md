---
title: Configuration
description: Configuring Clispot.
---

### Authentication

Before you can authenticate, you need to set up your Spotify API credentials.

On first run, clispot will:
1. Start a local web server on port 9292
2. Open your default browser to Spotify's authorization page
3. Ask you to authorize the application
4. Save the authentication token to `~/.clispot/token.json`

The token is automatically refreshed when needed. You only need to authenticate once (unless you revoke it).

### File Locations

* **Config:** `~/.clispot/token.json` - Stores Spotify authentication token
* **Debug logs:** 
  * `ytstderr.log` - YouTube downloader error logs
  * `ffstderr.log` - FFmpeg conversion error logs
  * Log location depends on the `-d` flag:
    * If `-d <path>` is specified: logs are saved in that directory
    * If not specified: logs are saved in `~/.clispot/logs` directory

These logs can be useful for troubleshooting playback issues and reporting bugs.
