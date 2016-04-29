window.CodeInvaders = (function() {
  "use strict";

  let i = Object.create(null);

  i.KEYBOARD_LEFT = 37;
  i.KEYBOARD_RIGHT = 39;
  i.KEYBOARD_UP = 0;
  i.KEYBOARD_DOWN = 0;
  i.KEYBOARD_SPACE = 32;
  i.KEYBOARD_ENTER = 0;

  i.animate = function(cb, from, to) {
    let phase = from;

    function raf() {
      cb();

      phase += (from < to ? 1 : -1 );
      if (phase === to) phase = from;

      window.requestAnimationFrame(raf);
    }

    raf();
  }

  return i;
})();
