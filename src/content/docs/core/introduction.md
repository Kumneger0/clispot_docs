---
title: Introduction
description: What brings Clispot to life and why we built it.
---

## What is Clispot?

Clispot is a CLI based Spotify client built specifically for developers who want to stay in their flow. It brings your music control directly into your terminal and VS Code, so you never have to `Alt+Tab` away from your code just to skip a track.

For most of us, music is essential for deep work. But the standard Spotify app is a bit of a resource intensive, and having to leave where you are is a constant distraction.

Clispot fixes that. It's lightweight, fast, and lives right where you spend most of your time.

## Why we built this

There are already some great terminal-based Spotify clients out there, like [spotify-tui](https://github.com/Rigellute/spotify-tui) and [ncspot](https://github.com/hrkfdn/ncspot). They are awesome tools, but they share one common limitation: **they require a Spotify Premium account.**

This is actually a restriction from Spotify's API itself—native playback control usually needs Premium.

**Clispot takes a different approach.**

We wanted a tool that works for **everyone**, whether you have Premium or not.

### How it works 

Instead of streaming audio directly from Spotify servers (which requires Premium), Clispot does something clever:

1.  It uses the **Spotify API** to get all your library data—playlists, artists, albums, and track names.
2.  When you play a song, it finds the matching audio on **YouTube**.
3.  It streams the audio seamlessly while you control everything as if it were playing from Spotify.

This means you get the best of both worlds: the organization and discovery of Spotify, with the accessibility of YouTube. No Premium subscription required.
