# Using the Canvas

> A `<canvas>` is a HTML element that lets you draw and paint arbitrary graphics
> onto a portion of the webpage. A canvas, like any element, has a width & height
> that you could fill with imagery to your heart's desire, using JavaScript code.

Now that we have access to our magical painting canvas, let's do this.

## Drawing your first alien

Finally! Some good stuff - let us paint our first otherworldy space invader!

```js
document.querySelector('canvas#CodeInvaders').getContext('2d').drawImage(CodeInvaders.gfxInvader1, 0, 0);
```

Whoah, there is a whole lot happening there, so let's try and break it down to
individual objects and calls:

## Expressions

```js
document // <= reference to the global document object
  .querySelector('canvas#CodeInvaders') // <= get the JS object
                                        //    for the canvas element
  .getContext('2d') // <= get the JS object
                    // for the drawing area
  .drawImage(CodeInvaders.gfxInvader1, 0, 0); // <= draw an alien! 👾
```

What happened here is we broke up our one-liner to smaller chunks for the sake of
better readability - but the result of the operation is unchanged! JavaScript
doesn't really care much about whitespace *(spaces, tabs, newlines)* - but humans do!
So it is a good practice to write code in a readable way (others reading your code,
and even your future self will thank you!)

> **Note: semicolons**  
> There are languages who care about whitespace (that is, spaces, tabs and newlines),
> but JavaScript doesn't really. That's why we could break the above one-liner up
> so easily. As long as the semicolon (`;`) is there at the end of the _statement_,
> the browser will just carry on without a complaint.  
> On _some_ occasions, you can leave even the semicolons off, but you shouldn't
> do that, it's good practice and leads to less confusion to just put them where
> they belong.

The _comments_ should be pretty self-explanatory, but here is a more detailed
rundown of what's happening, line by line
(or just [skip to the next challenge](#Moaaar_sprites)):

### `document`  
  We're referencing the global document object here, which gives us access
  to the currently loaded HTML document structure.

### `.querySelector('canvas#CodeInvaders')`  
As explained above, the `document` object has a `querySelector()` method to
get a reference to an HTML element's representation (a JavaScript object) by
specifying a selector for finding the appropriate element.

The above call will return an [`HTMLCanvasElement`] object - each HTML tag may
have different corresponding representation in JavaScript, and may expose
different methods and properties (that is, you can do different things with
different objects).

### `.getContext("2d")`  
Every [`HTMLCanvasElement`] object has a [`getContext()`] method, which returns
(based on what you requested in the parameter) a drawing canvas context. Canvas
contexts are like virtual drawing boards or whiteboards: you can put stuff on
them, overlay more stuff and then wipe them to draw new stuff.

If you do this fast enough (remember, computers are _fast_), up to 60 times a
_second_ it will give the illusion of animation!

### `.drawImage(CodeInvaders.gfxInvader1, 0, 0);`  
The `getContext("2d")` call returned a [`CanvasRenderingContext2D`] object, the
name of which is quite a mouthful, but if you check what it can do (click the
above link to jump to de programming reference), it is _really_ powerful!

It, among others, has the above [`drawImage()`] method - using that you can
put pre-loaded graphics to anywhere on your canvas (kind of like a _paint stamper_).

> **Note: comments**
> Anything greyed out in the above code (that is, stuff following the `//` characters)
> are _comments_. The browser will disregard any characters in a comment, and won't
> try to interpret or execute those.  
> `//`-comments are called _line comments_ - their effect lasts until the end of
> the line. You can also create _multi-line comments_ by putting text between
> `/*` and `*/` characters (just like in CSS!)

The `drawImage()` call takes 3 parameters: the image to draw, and the `x` and `y`
coordinates to draw the image at.

The image (also sometimes called _sprite_) comes from the `CodeInvaders` object.
This is a useful abstraction we concocted so you can focus on learning the basics
first, but later we will show you [how to load your own images](#), or even generate
and draw your very own [unique space invaders/sprites on the fly](#)!

The `x`/`y` coordinates (second/third parameter) on the other hand, feel free to change them and experiment with them!

<!-- TODO: image depicting the drawing coordinate axes -->

> **Note: coordinates**  
> Both `x` and `y` are simple numbers, describing how far from the left (`x`),
> or top (`y`) of the drawing surface (canvas context) should the image be drawn.
> (0,0) thus marks the top-left-most corner of the game area.
> Note that images are drawn by their top-left corner (that is, images will extend
> from that x/y coordinate further to the right/towards the bottom, depending on
> the size of the image.)

## Moaaar sprites

Now if I told you we also have a sprite referenced by `CodeInvaders.gfxDefender`,
could you draw it, too, and place it somewhere near the bottom of the screen?

> **Note: game area size**  
> Currently the game area is set to a size of 80x80 pixels (you can see this
> specified on the `<canvas>` element in the HTML).
> You will be able to change this if you wish in one of the following quests,
> but for the time being you should place your defender slightly above
> (that is, to a lower `y`-coordinate), otherwise it will "fall off" the edge
> of the world. Same goes for the `x` coordinate, you should experiment, and
> try aligning the defender at the bottom-middle part of the screen.

This is one way to do something like that:

```js
document // <= same
  .querySelector('canvas#CodeInvaders') // <= samesies
  .getContext('2d') // <= again, nothing new here
  .drawImage(CodeInvaders.gfxDefender, 35, 70); // <= oh!
```

Our defender is now centered at the bottom of the screen - see the green pastures
beyond? That's our dearest beautiful homeland we are trying to protect from the alien
invasion!

Well, that's a lot of repetition for the sake of drawing another image, isn't it?
Can't we just say _"fetch the canvas, get the context and draw **this** and
**that** and **those other stuff, too**"_?  
Of course we can, but for that we need an introduction to _variables_.


[» Continue to the Next Quest](./ProcInvaders-03-Variables.md)


[`HTMLCanvasElement`]: http://devdocs.io/dom/htmlcanvaselement
[`getContext()`]: http://devdocs.io/dom/htmlcanvaselement/getcontext

[CanvasRenderingContext2D]: http://devdocs.io/dom/canvasrenderingcontext2d
[`drawImage()`]: http://devdocs.io/dom/canvasrenderingcontext2d/drawimage
