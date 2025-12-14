---
title: Configuration
description: Configuring Clispot.
---

## Spotify Developer Setup

Before using Clispot, you must create a Spotify Developer application and configure your credentials.

### Step 1: Create a Spotify Application

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications) and log in.
2. Click on **"Create an app"**.
3. Give your application a name and description.
4. Find the **"Redirect URIs"** section and add the following URI:
   ```
   http://127.0.0.1:9292
   ```
5. Save your changes.
6. Now, view your application's settings and find your **Client ID** and **Client Secret**.

### Step 2: Configure Environment Variables

Set your Spotify credentials as environment variables. Add the following lines to your shell's configuration file (e.g., `.bashrc`, `.zshrc`, or `.profile`):

```bash
export SPOTIFY_CLIENT_ID="<your-client-id>"
export SPOTIFY_CLIENT_SECRET="<your-client-secret>"
```

Replace `<your-client-id>` and `<your-client-secret>` with the actual credentials from your Spotify application.

After adding these lines, reload your shell configuration:

```bash
source ~/.bashrc  # or ~/.zshrc, depending on your shell
```

> **Note:** Without these credentials, Clispot will not be able to authenticate with Spotify.

## Application Configuration

Clispot supports a persistent configuration file located at `~/.config/clispot/config.json` (or `$XDG_CONFIG_HOME/clispot/config.json`). This allows you to set defaults for various options without passing flags every time.

### Configuration File Structure

Here is an example of a complete `config.json` file:

```json
{
  "debug-dir": "/home/user/.local/state/clispot/logs",
  "disable-cache": false,
  "yt-dlp-args": {
    "cookies-from-browser": "firefox",
    "cookies": "/path/to/cookies.txt"
  }
}
```

### Configuration Precedence

Clispot applies configuration in the following order of precedence (highest to lowest):

1.  **Command Line Flags:** Options passed directly to the `clispot` command (e.g., `--debug-dir`, `--headless`).
2.  **Configuration File:** Settings defined in `~/.config/clispot/config.json`.
3.  **Defaults:** Hardcoded application defaults.

This means if you have `headless-mode: true` in your config file but run `clispot --headless=false`, the application will start in normal mode.

## Authentication

On first run, clispot will:
1. Start a local web server on port 9292
2. Open your default browser to Spotify's authorization page
3. Ask you to authorize the application
4. Save the authentication token to `~/.config/clispot/token.json`

The token is automatically refreshed when needed. You only need to authenticate once (unless you revoke it).

### File Locations

* **Config:** (Found in `$XDG_CONFIG_HOME`, defaults to `~/.config`)
  * `~/.config/clispot/token.json` - Stores Spotify authentication token
  * `~/.config/clispot/config.json` - Application settings (optional)
* **Debug logs:** (Found in `$XDG_STATE_HOME`, defaults to `~/.local/state`)
  * `ytstderr.log` - YouTube downloader error logs
  * `ffstderr.log` - FFmpeg conversion error logs
  * Log location depends on the `-d` flag:
    * If `-d <path>` is specified: logs are saved in that directory
    * If not specified: logs are saved in `~/.local/state/clispot/logs` directory

These logs can be useful for troubleshooting playback issues and reporting bugs.
