---
title: Features
description: Overview of Clispot features.
---

### Current Features

* **Library Browsing**
  * Browse your saved playlists
  * View followed artists and their top tracks
  * Access featured playlists from Spotify
  * View playlist contents and artist discographies

* **Search**
  * Search Spotify's catalog for tracks, artists, and playlists
  * View search results in organized columns
  * Navigate between search result categories

* **Playback**
  * Play music through YouTube audio streams
  * Queue management for continuous playback
  * Visual progress indicator for currently playing track
  * Automatic track progression

* **Integration**
  * MPRIS2 support for media key control (play/pause, next, previous)
  * Works with system media key shortcuts

* **Caching**
  * Caches YouTube audio streams for played tracks so next time when you play same song it plays from cache.

* **Lyrics Display**
  * View lyrics for the currently playing music. To enable this feature, install the `clispot-lyrics` tool globally from [https://github.com/Kumneger0/clispot-lyrics](https://github.com/Kumneger0/clispot-lyrics). Note that the downloaded binary might have a suffix indicating the OS and CPU architecture (e.g., `clispot-lyrics-linux-aarch64`). You must rename this binary to `clispot-lyrics` for clispot to correctly detect it. Once installed, clispot will automatically provide an option to open lyrics for the selected music.

### MPRIS Integration

clispot implements MPRIS2, allowing integration with:
* Desktop environments that support media keys
* Media controllers and widgets
* Keyboard media keys (if configured to use MPRIS)
