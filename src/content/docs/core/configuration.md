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

## Authentication

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
