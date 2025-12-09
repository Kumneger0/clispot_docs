---
title: Quickstart
description: Get started with the Clispot VS Code Extension.
---

## Prerequisites

Before using the extension, you must have the **Clispot CLI** installed on your system.

- [Install Clispot CLI](https://github.com/kumneger0/clispot/releases/latest)

## Getting Started

1.  Open VS Code.
2.  The extension will automatically start the Clispot backend service in the background.
3.  Click the **Clispot** icon in the Activity Bar (sidebar) to open your library.

## Features

### Library View
Access your Spotify library directly from the sidebar. You can view:
- **Playlists**: Browse and play your saved playlists.
- **Saved Tracks**: Access your liked songs.
- **Followed Artists**: Browse your favorite artists.

### Playback Control
- **Status Bar**: Shows the currently playing track and time. Click to toggle play/pause.
- **Commands**: Open the Command Palette (`Ctrl+Shift+P`) and type `Clispot` to see available commands:
    - `Clispot: Toggle Play/Pause`: Pauses or resumes playback.
    - `Clispot: Refresh Library`: Reloads your library data.

## Troubleshooting

- **"Clispot is not installed"**: Ensure the `clispot` binary is in your system PATH.
- **Server issues**: The extension runs `clispot --headless` in a background terminal. If issues persist, try restarting VS Code.
