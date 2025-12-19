---
title: Installation
description: How to install Clispot.
---

### Prerequisites

**Required:**
* Go 1.25 or higher (if building from source)
* [`yt-dlp`](https://github.com/yt-dlp/yt-dlp) - YouTube downloader for audio playback
* [`ffmpeg`](https://ffmpeg.org/) - Audio conversion

### From GitHub Releases

Download the latest release from the [GitHub releases page](https://github.com/kumneger0/clispot/releases). **Note:** Pre-built binaries are currently only available for Linux AMD64 architectures. Extract the archive for your architecture and place the `clispot` executable in a directory in your PATH (e.g., `/usr/local/bin`).

For other operating systems, please build from source.

### Using Docker

If you prefer not to install dependencies like Go or `yt-dlp` directly on your system, you can run Clispot using Docker.

#### 1. Pull the Image
```bash
docker pull kumneger0/clispot:latest
```

#### 2. Run the Container
Pass your Spotify credentials as environment variables from your host:
```bash
docker run -it \
  -e SPOTIFY_CLIENT_ID=$SPOTIFY_CLIENT_ID \
  -e SPOTIFY_CLIENT_SECRET=$SPOTIFY_CLIENT_SECRET \
  kumneger0/clispot:latest
```

#### 3. Create an Alias (Recommended)
To avoid typing the full command every time, add this alias to your shell configuration (e.g., `~/.bashrc` or `~/.zshrc`):

```bash
alias clispot='docker run -it -e SPOTIFY_CLIENT_ID=$SPOTIFY_CLIENT_ID -e SPOTIFY_CLIENT_SECRET=$SPOTIFY_CLIENT_SECRET kumneger0/clispot:latest'
```

Now you can simply run `clispot` from your terminal!

