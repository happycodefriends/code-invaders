window.CodeInvaders = (function() {
  "use strict";

  let i = Object.create(null);

  i.KEYBOARD_LEFT = 37;
  i.KEYBOARD_RIGHT = 39;
  i.KEYBOARD_UP = 0;
  i.KEYBOARD_DOWN = 0;
  i.KEYBOARD_SPACE = 32;
  i.KEYBOARD_ENTER = 0;

  i.animate = function(cb, from, to, speed) {
    let frameskip = speed ? Math.round(1/speed) : 0;
    let frame = 0;
    let phase = from;

    function raf() {
      cb(phase);

      frame++;
      if (frame >= frameskip) {
        frame = 0;
        phase += (from < to ? 1 : -1 );

        if (phase >= to) phase = from;
      }

      window.requestAnimationFrame(raf);
    }

    raf();
  }

  let bmpDefender = `
    .........
    ....#...
    ...###...
    ..#####..
    #.##.##.#
    ###...###
    #########
  `;

  let bmpInvader1 = `
    ..#...#..
    ...#.#...
    .#######.
    ##.###.##
    #########
    #.#.#.#.#
  `;
  let bmpInvader1b = `
    ...#.#...
    .. #.#...
    .#######.
    ##.###.##
    #########
    .#.#.#.#.
  `;

  function loadBitmap(bmp) {
    let bitmap = bmp.trim().replace(/[ \t]/g,'').split(/\n/);

    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");

    canvas.width = ctx.width = bitmap[0].length;
    canvas.height = ctx.height = bitmap.length;

    ctx.fillStyle = "white";

    bitmap.forEach(function(row, y) {
      row.split("").forEach(function(px, x) {
        if (px === "#") ctx.fillRect(x, y, 1, 1);
      });
    });

    return canvas;
  }

  i.gfxDefender = loadBitmap(bmpDefender);
  i.gfxInvader1 = loadBitmap(bmpInvader1);

  return i;
})();
