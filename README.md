# Quick Video Editor
![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/laupski/quick-video-editor?include_prereleases&sort=semver&style=flat-square) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT) ![GitHub all releases](https://img.shields.io/github/downloads/laupski/quick-video-editor/total?style=flat-square)

This project is meant to quickly update local video files in an easy manner.

![Quick Video Editor Preview](https://raw.githubusercontent.com/laupski/quick-video-editor/main/static/preview.PNG)

## Technical Information
This project is built using `electron` and wrapped around the `ffmpeg` executable project. Rather than having end users use the CLI, the UI steers the users to their intended changes.

## Download
Download [here](https://github.com/laupski/quick-video-editor/tree/main/releases).

## Build Locally
`git clone https://github.com/laupski/quick-video-editor.git` \
`cd quick-video-editor` \
`npm install` \
`npm run make` \
To run your release: `npm run start` \
The stand alone executable gets created under `./out/Quick Video Editor-platform-arch`. 
The setup installer gets created under `./out/make/*`

## Current Features
- Playing videos
- Muting videos

## Future Planned Features
- Add music to videos
- Add watermark
- Add information overlays

## Support and Releases
| platform | arch | support? |
|----------|------|----------|
| win32    | x64  | yes      |

## Contributing Guidelines
Fork it, make change, create PR.