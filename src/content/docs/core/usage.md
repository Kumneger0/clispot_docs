---
title: Usage
description: How to use Clispot.
---

### Starting the Application

Simply run:
```bash
clispot
```

The application will check for authentication and prompt you if needed.

**Command-line Options:**
* `-d, --debug-dir <path>` - Specify a directory where debug logs will be saved. The logs `ytstderr.log` and `ffstderr.log` will be created in this directory. If not specified, logs are saved in `~/.clispot/logs` directory.
* `-c, --cache-dir <path>` - Specify a directory where cached audio files will be saved. Defaults to `~/.cache/clispot` (Linux), `%Appdata%/clispot/cache` (Windows), or `~/Library/Caches/clispot` (macOS).
* `--disable-cache` - Disable caching of YouTube audio streams. When this flag is used, audio streams will not be saved to disk. Defaults to `false` (caching is enabled by default).
* `--cookies-from-browser <browser_name[:profile]>` - Pass cookies from the specified browser to `yt-dlp`. This is useful for accessing age-restricted content or content that requires login.
* `--cookies <filepath>` - Pass cookies from a specified file to `yt-dlp`. The file should be in Netscape cookie file format.
* `--headless` - Run clispot in headless mode, providing an API endpoint to build custom UIs. Our [vscode extension](/vscode-extension/quickstart) uses this feature.


Example:
```bash
clispot -d ~/logs/clispot
```

Example with cache disabled:
```bash
clispot --disable-cache
```

Example using cookies from a browser (e.g., Firefox):
```bash
clispot --cookies-from-browser firefox
```

Example using cookies from a file:
```bash
clispot --cookies ~/my_cookies.txt
```

### Interface Layout

clispot uses a three-panel layout:


**Left Panel (Sidebar):** Your Spotify library
* Saved playlists (if no featured playlists available)
* Featured playlists (by default, if available)
* Followed artists

**Center Panel (Main Content):**
* Displays tracks when you select a playlist or artist
* Shows search results (tracks, artists, playlists in columns)
* Changes based on current view mode

**Right Panel (Queue):**
* Current music queue
* Tracks are added here when you play music
* Use `n` and `b` to navigate through the queue

**Bottom (Player Controls):**
* Shows currently playing track with progress bar
* Playback control buttons with keyboard shortcuts

### Navigation

**Moving Between Panels:**
* `Tab` - Cycle focus forward through panels (Sidebar → Main → Queue → repeat)
* `Shift+Tab` - Cycle focus backward

**Within Lists:**
* `j` or `↓` - Move down
* `k` or `↑` - Move up
* Arrow keys also work for navigation

**Focusing Search:**
* `Ctrl+K` - Focus the search bar

### Actions

**Search:**
1. Press `Ctrl+K` to focus the search bar
2. Type your query
3. Press `Enter` to search
4. Results appear in three columns: Tracks, Artists, Playlists
5. Use `Tab` to navigate between result columns

**Liking and Unliking Songs:**
* `l` - Like or unlike a song. Liked songs can be found in the "Liked Songs" playlist in the sidebar.

**Managing the Queue:**
* `a` - Add a song to the queue.
* `d` - Remove a song from the queue.

**Playing Music:**
* `Enter` (when focused on):
  * **Sidebar:** Load playlist/artist tracks into main view
  * **Main View:** Play selected track and add current view to queue
  * **Queue:** Play selected track
  * **Search Results:**
    * **Track:** Play the track directly
    * **Artist:** Load artist's top tracks
    * **Playlist:** Load playlist tracks

**Playback Controls:**
* `Space` - Toggle play/pause
* `n` - Play next track in queue(the player section needs to be focused here)
* `b` - Play previous track in queue(the player section needs to be focused here)

**Exiting:**
* `q` or `Ctrl+C` - Quit the application

### Keyboard Shortcuts Reference

| Key | Action |
|-----|--------|
| `Tab` | Cycle focus between panels |
| `Ctrl+K` | Focus search bar |
| `j` / `↓` | Move down in list |
| `k` / `↑` | Move up in list |
| `l` | Like/Unlike a song |
| `a` | Add song to queue |
| `d` | Remove song from queue |
| `Enter` | Context-dependent action (play/load) |
| `Space` | Play/pause current track |
| `n` | Next track |
| `b` | Previous track |
| `q` / `Ctrl+C` | Quit |
| `Ctrl+L` | Open Lyrics |

### Workflow Examples

**Playing a Playlist:**
1. Navigate to the sidebar (starts focused here)
2. Use `j`/`k` to select a playlist
3. Press `Enter` to load tracks
4. Select a track in the main view
5. Press `Enter` to start playback

**Searching and Playing:**
1. Press `Ctrl+K` to focus search
2. Type your query (e.g., "Radiohead")
3. Press `Enter`
4. Use `Tab` to navigate to the Tracks column
5. Select a track and press `Enter` to play

**Browsing an Artist:**
1. In the sidebar, select an artist (if in your followed artists)
2. Press `Enter` to load their top tracks
3. Select a track and press `Enter` to play
4. Or search for an artist, select from search results, and press `Enter`

### Caching Behavior

When a track is played, clispot attempts to cache its audio stream.
*   If you skip a song during its *first-time playback* (i.e., while it's being downloaded and cached), the partially downloaded cache file will be removed.
*   If a song has already been *fully downloaded and cached*, and you skip it during a subsequent playback (when it's playing from the cache), the existing cache file will **not** be removed.

This ensures that only incomplete or interrupted cache files are cleaned up, while fully cached tracks remain available for future playback.
