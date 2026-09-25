# Pokédex API Card

A responsive Pokédex-style Pokémon search application built with HTML, CSS, and JavaScript. It uses the public [PokeAPI](https://pokeapi.co/) to display Pokémon information, abilities, moves, artwork, and base stats.

## Features

- Search for Pokémon by name
- Supports names with spaces, such as `iron crown`
- Shows loading, success, and error states
- Displays Pokémon name, ID, artwork, types, height, and weight
- Includes quick-search buttons
- Displays all six base stats
- Displays abilities
- Displays all unique moves
- Includes previous/next Pokémon navigation
- Includes type-specific colors
- Includes Pokémon cry and spoken description audio
- Includes a mute/unmute button

## API Endpoint

The application requests Pokémon data from:

<https://pokeapi.co/api/v2/pokemon/{name}>

Search names are trimmed and converted to lowercase. Spaces are replaced with hyphens before sending the request. For example:

Iron Crown → iron-crown

## API Fields Used

- `name` — Pokémon name
- `id` — Pokémon Pokédex number
- `sprites.other.official-artwork.front_default` — official artwork
- `sprites.front_default` — fallback sprite
- `types[].type.name` — Pokémon types
- `height` — height in decimetres, converted to metres
- `weight` — weight in hectograms, converted to kilograms
- `stats[].stat.name` — base-stat names
- `stats[].base_stat` — base-stat values
- `abilities[].ability.name` — ability names
- `moves[].move.name` — unique move names
- `species.url` — species information for the audio description
- `cries.latest` — Pokémon cry audio

## Project Files

- `index.html` — page structure and interface elements
- `style.css` — responsive Pokédex styling and animations
- `script.js` — API requests, navigation, tabs, and dynamic rendering
- `audio.js` — Pokémon cry and speech functionality
- `assets/` — fonts and image assets

## Running the Project

Activate Live-Server then navigate to the project folder (/Tasks/Pokedex)
or,

Open a terminal in the project folder and run:

bash command:
python -m http.server 8000

Then visit:

<http://localhost:8000>

## Controls

- Use the search field and select **SEARCH**.
- Press **Enter** to search.
- Use the quick-search buttons for preset Pokémon.
- Use the previous/next buttons below the artwork to change Pokémon.
- Use the arrow buttons in the bottom header to switch between Base Stats, Abilities, and Moves.
- Use the audio button in the top-left corner of the artwork to mute or unmute sound.

## AI Usage

- For the project guidance, polishing and few snippets or pseudo codes:
    DeepSeek: <https://chat.deepseek.com/share/shboeff38tr9jcv03u>

## UI/UX Design

- Figma: <https://www.figma.com/design/tTsq9ZoahWMHiA3AddXKGh/Pokedex?node-id=0-1&t=IIJxTdBBTFSDY16I-1>
