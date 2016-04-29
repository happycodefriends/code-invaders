```html
<!doctype html>
<html>
<body>
  <canvas id="CodeInvaders"></canvas>
  <script src="helpers/codeinvaders.js"></script>
  <script></script>
</body>
```

# Objects & expressions
```js
document.querySelector('canvas#CodeInvaders');
```

# Functions & methods
```js
document.querySelector('canvas#CodeInvaders').getContext("2d").drawImage(0,0, CodeInvaders.gfxInvader1)
```

```js
document.querySelector('canvas#CodeInvaders') // <= canvas element object
  .getContext("2d") // <= drawing area
  .drawImage(0,0, CodeInvaders.gfxInvader1); // <= draw an alien! 👾
```

# Variables

```js
var canvasElement = document.querySelector('canvas#CodeInvaders');
var canvas = canvasElement.getContext("2d");

canvas.drawImage(0,0, CodeInvaders.gfxInvader1);
```

```js
var canvas = document.querySelector('canvas#CodeInvaders').getContext("2d");

canvas.drawImage(0, 0, CodeInvaders.gfxInvader1);
canvas.drawImage(0, 100, CodeInvaders.gfxDefender);
```

# Types
```js
var gameOver = false;

var gamePaused = true;

var turretPosition = 50;

var pauseMessage = "Press SPACE to play!";
```

```js
var gameOver = false;
var gamePaused = true;
var turretPosition = 50;

const pauseMessage = "Press SPACE to play!";
```

note: const

```js
canvasDrawingArea.drawImage(turretPosition, 100, CodeInvaders.gfxDefender);
```

# A statement & execution

```js
// <- This is a comment, it only affects the current line, until the end of line --->|
var gameOver = false;

var gamePaused = true; // <- every command is separated by semicolons

//
var gameAreaSize = 80;

/* you can create
   multiline comments
   like this */
const pauseMessage = "Press SPACE to play!";
```

```js
// Stores the current position of the player's turret (the Defender) on the X-axis
var turretPosition = gameAreaSize / 2;

// Make sure the turret is centered!
canvasDrawingArea.drawImage(CodeInvaders.gfxDefender, turretPosition - CodeInvaders.gfxDefender.width / 2, 100);
```

*except...*

# Conditions, If


```js
canvas.fillStyle = "white";

canvas.fillText(pauseMessage, 0, gameAreaSize / 2);
```

```js
canvas.fillStyle = "white";

if (gamePaused) {
  canvas.fillText(pauseMessage, 0, gameAreaSize / 2);
}
```

truthy

```js
canvas.fillStyle = "white";

if (gamePaused == true) {
  canvas.fillText(pauseMessage, 0, gameAreaSize / 2);
}
```

== / ===

```js
var planetSaved; // will be "undefined"

planetSaved = true; // try false, or removing the line altogether!

if (planetSaved == true) {
  canvas.fillText("The Earth is safe!", 0, gameAreaSize / 2);
}
if (planetSaved == false) {
  canvas.fillText("We are Doomed!", 0, gameAreaSize / 2);
}
```

```js
if (planetSaved === false) {
  canvas.fillText("We are Doomed!", 0, gameAreaSize / 2);
}
```

&& / || / !

```js
// If the game is over, and we couldn't save the planet, don't draw the Defender   
if (gameOver === true && planetSaved === false) {
  // okay nothing to do here
} else {
  // we either saved the planet, or the game is not over yet!
  canvasDrawingArea.drawImage(CodeInvaders.gfxDefender, turretPosition - CodeInvaders.gfxDefender.width / 2, 100);
}
```

not pretty

```js
// If the game is over, and we couldn't save the planet, don't draw the Defender - NOT!
if (!(gameOver === true && planetSaved === false)) {
  // we either saved the planet, or the game is not over yet!
  canvasDrawingArea.drawImage(CodeInvaders.gfxDefender, turretPosition - CodeInvaders.gfxDefender.width / 2, 100);
}
```

still not pretty: Math to the rescue

NOT (A AND B) === (NOT A) OR (NOT B)

```js
// Either the game hasn't ended yet, or it did - but we saved the planet!
if (gameOver === false || planetSaved === true) {
    canvasDrawingArea.drawImage(CodeInvaders.gfxDefender, turretPosition - CodeInvaders.gfxDefender.width / 2, 100);
}
```

short-circuit


# Loops

```javascript
canvasDrawingArea.drawImage(CodeInvaders.gfxInvader1, 0, 0);
```

more

```javascript
canvasDrawingArea.drawImage(CodeInvaders.gfxInvader1, 0, 0);
canvasDrawingArea.drawImage(CodeInvaders.gfxInvader1, 10, 0);
```

more!

```javascript
canvasDrawingArea.drawImage(CodeInvaders.gfxInvader1, 0, 0);
canvasDrawingArea.drawImage(CodeInvaders.gfxInvader1, 10, 0);
canvasDrawingArea.drawImage(CodeInvaders.gfxInvader1, 20, 0);
```

that's more or less:

```javascript
var x = 0;
canvasDrawingArea.drawImage(CodeInvaders.gfxInvader1, x, 0);

x = x + 10;
canvasDrawingArea.drawImage(CodeInvaders.gfxInvader1, x, 0);

x = x + 10;
canvasDrawingArea.drawImage(CodeInvaders.gfxInvader1, x, 0);
```

there is a pattern in there!

```javascript
var x = 0;

while (x < 30) {
  canvasDrawingArea.drawImage(CodeInvaders.gfxInvader1, x, 0);

  x = x + 10;
}
```

```javascript
var n = 0;

while (n < 8) {
  canvasDrawingArea.drawImage(CodeInvaders.gfxInvader1, n * 10, 0);

  x++; // same as saying x = x + 1;
}
```



# Creating Functions

```javascript
function drawInvaders() {
  var n = 0;

  while (n < 8) {
    canvasDrawingArea.drawImage(CodeInvaders.gfxInvader1, n * 10, 0);

    x++; // same as saying x = x + 1;
  }
}
```

displace

```javascript
function drawInvaders(positionX) {
  var n = 0;

  while (n < 8) {
    canvasDrawingArea.drawImage(CodeInvaders.gfxInvader1, n * 10 + positionX, 0);

    x++; // same as saying x = x + 1;
  }
}

drawInvaders(5);
```

now only if we could do this constantly, in rapid succession...

```javascript
CodeInvaders.animate(drawInvaders, 0, 10);
```

was that magic? nah, of course not, but to understand what's going on we first have to meet callbacks and scope

# Scope

parameters, variables declared in a scope

```javascript
function drawAnimated() {
  var x = 0;

  console.log('Drawing invaders at coordinate: ', x);
  drawInvaders(x);

  x++;
}

drawAnimated();
drawAnimated();
```

that obviously won't work (it's not just that x will be re-set to 0 on every call, but actually the whole variable
will be disposed of at the end of the first function call, and recreated on the second).

this happens because the variables are "scoped", they have an effective range of validity

scopes can, though, be nested!

```javascript
var x = 0; // now we are talking!

function drawAnimated() {
  console.log('Drawing invaders at coordinate: ', x);
  drawInvaders(x);

  x++;
}

drawAnimated();
drawAnimated();
```

the scope of the drawAnimated function can access the *outer* scope, but not the other way around: you couldn't access the function's parameters from outside of it, because - you guessed - the don't exist outside of the function. There is one special case, one fine print: [closures](#), but first we have bigger fish to fry.


# Callbacks

Now that we know how to store our animation's state, let's split our function into two separate routines to make things more readable: `update` and `draw`:

```javascript
var n = 0;

function update() {
  n++;

  if (n > 7) {
    n = 0;
  }
}

function draw() {
  drawInvaders(n);
}
```

we want to update / draw repeatedly

callbacks

event "just run this later"

there is an important difference between
- calling a function with `()`, or just
- simply passing a function as a parameter (that is, the function *itself*, basically the code and routines it encompasses)

```javascript
function run() {
  update();
  draw();
}

setTimeout(run, 50);
```

uh-oh, we just drew several batches of invaders on top of each other!

what we are missing, is clearing the screen - so let's update the `draw()` function with that:

```javascript
function draw() {
  canvasDrawingArea.clearRect(0, 0, gameAreaSize, gameAreaSize);

  drawInvaders(n);
}
```

that basically removes everything from the screen, but since computers are fast,
and we are painting over the (slightly shifted) graphics *right away*, to our eyes
this seems to happen smoothly, without any "blinking".

To ensure it stays like that we could use another feature instead of `setInterval`: most of
the time when you have timely function calls like this (especially graphics) it's recommended
that you use `requestAnimationFrame`:

```javascript
function run() {
  update();
  draw();

  window.requestAnimationFrame(run);
}

run();
```

"hey the next time you are drawing on the screen, make sure you do this stuff beforehand"

# Fire in the hole!

So let's blast those otherworldy beasts in the face finally!

We already have a turret (our Defender), that will spew rockets at those ungodly pests. Our
rockets will appear first at the tip of the cannon, and make their way towards the top, eventually
(and ideally) then hitting one of the invaders, or flying off the top of the screen.

We already know how to do that!

First we need to store the position of the rocket:

```
car rocketX = turretPosition;
var rocketY = 0;

```

Firing the rocket is putting it to the tip of the Defender turret, moving towards
the top of the screen. For the time being, we will reset the bulvar to the bottom
of the screen, once it leaves the screen.

```javascript
function update() {
  if (rocketY > 0) {
    rocketY--;
  } else {
    rocketY = gameAreaSize - 5;
  }
}
```

Oh and we need to draw the rocket too - let's just represent it as a small red box
for now using `fillStyle`[📑](fillStyle) and `[fillRect]`[📑](fillRect):


```javascript
function draw() {
  canvasDrawingArea.fillStyle="red";

  canvasDrawingArea.fillRect(0, rocketY, 1, 2);
}
```

Now that's okay but how about firing the rocket ourselves? Now that you are familiar
with callbacks it's about time we introduced you to…

# Events

At any given time, a single code/command/callback is executed.

Philip Roberts http://latentflip.com/loupe/

Various events: keyboard, mouse, touch, network events and more.

Events are...

```javascript
function keyDownCallback(event) {
  console.log("Pushed a button!", event);
}

window.addEventListener("keydown", keyDownCallback);
```

Now this is exactly what we needed, let's hook it up to our rocket-firing mechanism:

```javascript
function update() {
  if (rocketY > 0) {
    rocketY--;
  }
}

function keyDownCallback(event) {
  if (rocketY === 0)  {
    rocketY = gameAreaSize - 5;
  }
}

window.addEventListener("keydown", keyDownCallback);
```

This will fire the rocket for every conceivable key pushed, but we need to be more selective,
and only fire the rocket when the *space* key is pushed.

Event callbacks, when called by the browser are passed a special `event` object
(you could give the parameter any name in your callback, it will be passed an event
object by the browser in its first parameter). These `event` objects contain various
properties that tell you more about the event.

The `keydown` event is passed a `KeyboardEvent`[](KeyboardEvent), including `keyCode`
property which we could query to determine what happened:

```javascript
function keyDownCallback(event) {
  if (event.key === " " && rocketY === 0)  {
    rocketY = gameAreaSize - 5;
  }
}
```

The `event.key` property contains a string representation for the key pressed
(for the space key itself this is the " " (space string) itself), for others this
could be a different string (like for arrow keys, see below).

Now let's add movement to our cannon, shouldn't be too hard after the above:

```javascript
var defenderX = gameAreaSize / 2;

function keyDownCallback(event) {
  if (event.key === " " && rocketY === 0)  {
    rocketY = gameAreaSize - 5;
  }

  if (event.key === "ArrowLeft") {
    if (defenderX > 0) {
      turretPosition--;
    }
  }

  if (event.key === "ArrowRight") {
    if (defenderX < gameAreaSize) {
      turretPosition++;
    }
  }
}

window.addEventListener("keydown", keyDownCallback);
```

That, although, would require some changes to our rocket blaster code, can't just
have it blast off from anywhere, it has to follow the Defender:

```javascript
function keyDownCallback(event) {
  if (event.key === " " && rocketY === 0)  {
    rocketX = turretPosition;
    rocketY = gameAreaSize - 5;
  }

  //...
}
```

## Bonus 1

Anti-fastclick :)

```javascript
var moveLeft = false;
var moveRight = false;

window.addEventListener("keyup", keyDownCallback);
```

## Bonus 2
```javascript
var moveLeft = false;
var moveRight = false;

function keyboardCallback(event) {
  if (event.key === "ArrowLeft") {
    if (event.type === "keydown") {
      moveLeft = true;      
    } else {
      moveLeft = false;
    }
  }

  if (event.key === "ArrowRight") {
    if (event.type === "keydown") {
      moveRight = true;      
    } else {
      moveRight = false;
    }
  }
}

window.addEventListener("keydown", keyboardCallback);
```

## Bonus 2

Don't you just _hate_ typing all those if-s? This will end up with practically the same result.

```javascript
if (event.keyCode === CodeInvaders.KEYBOARD_LEFT) {
    moveLeft = (event.type === "keydown");
}
```

# Arrays, collections

```javascript
var invaders = [];

var i = 0;
while (i < 8) {
  invaders.push(true);
}
```

It's time to revisit our invader drawing routine! Only draw the invaders still alive:

```javascript
function drawInvaders(positionX) {
  var n = 0;

  while (n < 8) {
    if (invaders[n] === true) {
      canvasDrawingArea.drawImage(CodeInvaders.gfxInvader1, n * 10 + positionX, 0);
    }

    n++;
  }
}
```


## Bonus 1

Easier prefilled array with `Array.fill`:

```javascript
var invaders = Array(8).fill(true);
```

Easier iteration with `for … of`:

```javascript
var inv;

for (inv of invaders) {
  if (inv === true) {
    canvasDrawingArea.drawImage(CodeInvaders.gfxInvader1, n * 10 + positionX, 0);
  }
  // for-of iterates automatically at the end of the loop core,
  // no incrementing needed
}
```

# Hit detection

On every update we are checking for a hit.

```javascript
function checkHits() {
  var n = 0;

  while (n < 8) {
    // still alive
    if (invaders[n] === true) {
      // reached invaders
      if (rocketY <= CodeInvaders.gfxInvader1.height) {
        // hit?
        if (rocketX >= n * 10 + positionX
            &&
            rocketX <= n * 10 + positionX + CodeInvaders.gfxInvader1.width
        ) {
          invaders[n] = false;
          rocketY = 0;
        }
    }

    n++;
  }
}


function update() {
  checkHits(n);
  // ...
```

# Victory

Functions can have a returned value - when a function is called, it is _evaluated_
as any other javascript expression, that is it is passed some parameters, the code
is then run, and the return value (if any) is returned to the executing context:

```javascript
function checkVictory() {
  var n = 0;

  while (n < 8) {
    if (invaders[n] === true) {
      return false;
    }

    n++;
  }

  return true;
}
```

The `return` statement can be used to return a value from the function, and it
immediately stops execution of the function (no matter what parameters it is
passed). Return could be used to return early from a function, like in here -
if there are _any_ invaders remaining, we don't need to check the others anymore,
the game is definitely not won yet.

Functions without a `return` statement/value will have an `undefined` return value.

```javascript
function update() {
  if (checkVictory() === true) {
    gameOver = true;
    planetSaved = true;
  }

  // ...
}
```

# Defeat

Invaders should descend from outer space!

```function
let invaderY = 0;

function invadersDescending() {
  invaderY++;
}

setInterval(invadersDescending, 10000);
```

Now we just have to make sure we draw them the right way:

```javascript
// ...
canvasDrawingArea.drawImage(CodeInvaders.gfxInvader1, n * 10 + positionX, invaderY);
// ...
```

...also making sure we check the rocket hits properly with the changing Y coordinate
taken into account:

```javascript
invaderY
```

After all that, we just need to check if the invaders have reached ground level:

```javascript
function checkDefeat() {
  if (invaderY > gameAreaSize - 10) {
    return true;
  }

  return false;
}

function update() {
  if (checkDefeat() === true) {
    gameOver = true;
    planetSaved = false;
  }

  // ...
}
```

# Further Reading

[fillStyle]: http://devdocs.io/dom/canvasrenderingcontext2d/fillstyle
[fillRect]: http://devdocs.io/dom/canvasrenderingcontext2d/fillRect

# Advanced:
* image loading + custom sprite graphics
* multiple rows of invaders
* advanced, independent invader animation
* touch compatibility
* possibility for multiple rockets at the screen
* multiple types of invaders (multiple hits, bombs etc)

# TODO:

* this & new
* DOM manipulation
* prototypes

Actually, build a *functional* code invaders!
* embracing ES6+
* prototypal (with objects, no global scope)
