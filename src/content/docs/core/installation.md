---
title: Installation
description: How to install Clispot.
---

:::caution[Early Development Notice]
Clispot is currently in early development. Expect bugs and breaking changes.
:::

### Prerequisites

**Required:**
* [`yt-dlp`](https://github.com/yt-dlp/yt-dlp) - YouTube downloader for audio playback
* [`ffmpeg`](https://ffmpeg.org/) - Audio conversion

### Quick Install

The easiest way to install Clispot is using the official installation scripts.

#### Linux and macOS
```bash
curl -fsSL https://raw.githubusercontent.com/kumneger0/clispot/main/install.sh | sh
```

#### Windows (PowerShell)
```powershell
iwr -useb https://raw.githubusercontent.com/kumneger0/clispot/main/install.ps1 | iex
```

:::tip
For the best experience on Windows, we recommend using **[Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701)**. Standard Command Prompt and PowerShell may experience UI flickering issues.
:::

:::note
The installation scripts will automatically download the correct binary for your system and add Clispot to your `PATH`.
:::

### Manual Installation

#### From GitHub Releases
We offer pre-built binaries for major operating systems including Linux, Windows, and macOS. Download the latest release from the [GitHub releases page](https://github.com/kumneger0/clispot/releases).

#### Build from Source
If you wish to build from source, please verify the [installation guide](https://github.com/Kumneger0/clispot/blob/main/docs/install.md).

