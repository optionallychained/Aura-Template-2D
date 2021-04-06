# Aura-Template-2D

Aura-Template-2D is a bare-bones starter project for getting up and running making 2D games with [Aura](https://github.com/jonnopon/Aura), including:
- ESlint configuration
- WebPack configuration
- VSCode Debug configuration
- A simple demo game


## Demo

[Aura-Template-2D Demo](https://jonnopon.github.io/Aura-Template-2D/)

**WASD** to move


## Setup
- Install [NPM](https://nodejs.org/)
- Clone
- Terminal: `npm install`


## Development
- Terminal: `npm run dev`
    - **Alternatively (recommended)**: Run Debug configuration in VSCode
- Work on your game in `src/`
- View output at `localhost:8080`


## Distribution
- Terminal: `npm run dist`
- Retrieve build from `dist/`


## Misc
- Terminal: `npm run lint`
    - executed before `dist`

- Terminal: `npm run deploy`
    - builds, then deploys `dist/` to the `gh-pages` branch
