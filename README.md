# e4004

A browser emulator for the Intel 4004 CPU, with a disassembler view, 4002 RAM bank and chip
viewers, and a pixel screen drawn from RAM.

Open `index.html` in a browser, or use the GitHub Pages site.

## Credit

This is a modified copy of **e4004** by **Maciej Szyc** (2006), <http://e4004.szyc.org>, which is
itself based on the JavaScript 6502 emulator by **Norbert Landsteiner**
([e-tradition.net](https://www.e-tradition.net/)). The emulator core (`4004cpu.js`) and GUI
(`4004gui.js`) are Maciej Szyc's work.

## Changes in this copy

- `screen.js`: renders 4002 RAM as four pixel quadrants on canvases.
- `Screentest.asm`, `clearscreen.asm`: demo programs that fill and clear that screen.
- The disassembler table spells out every `JCN` condition combination, and the core and GUI
  were refactored (renamed variables, new page layout in `index.html` and `4004_style.css`).

## Licence

GPL-2.0-or-later, as the original. See `LICENSE`.
