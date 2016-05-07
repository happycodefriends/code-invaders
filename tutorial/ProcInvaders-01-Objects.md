# Objects

> Objects are a collection of data and behavior, stuck together and made available
> to a JavaScript code. Objects store these under labels called `properties`, that
> reference `values` - numbers, strings, other objects or methods. All these fancy
> properties can be accessed via a period (`.`) and the name of the property:
> `myObject.fancyProperty`


## Built-in objects

```js
document;
```

The built-in global [`document`] object is used in JavaScript to access the
currently loaded html document from our JavaScript code.

You can check the various properties and methods defined on this object in the
reference linked above.

You now either [skip to the action](./ProcInvaders-02-Canvas.md) or read more about objects, methods and properties.


## Properties

An object's properties are values on an object, that can be read (accessed) and
set (changed) via their key (name). They store important information about the object
in various data formats (numbers, strings, or even objects or functions). More about
this a bit later.

```js
document.title;
```

The [`title`](http://devdocs.io/dom-document/title) property on the [`document`]
object is like that. It contains a string representation of the document's title
(visible in the title of the current window or tab), defined in the `<title>` html
element in the `<head>` of the current document.

Try pasting the below script in the console:

```js
document.title = prompt('New title?', document.title);
```

You will realize it will offer you to change the current window title. Type something
new and use the developer tools to check that indeed, the text in the `<title>` tag has
changed - JavaScript is so powerful, because it has full access to the webpage
loaded into the browser's memory.

PS: try reloading the page and you will see your changes didn't persist - this is
of course because JavaScript only manipulates _your own "copy"_ of the webpage, living
in the browser's memory, and not the original source.

> **Note: 'strings'**  
> Strings are how we represent textual data in a computer program—they get their
> name from being literally "strings-of-characters". You can embed strings in
> your JavaScript code by simply typing them up - you will need to put them between
> single or double quotes (`'` & `"`), it doesn't matter which one you use, as
> long as you are consistent and don't mix them up.
>
> There are some other ways to get or create a string in a computer program, too
> (the `prompt()` command above, for example, returns a string), but we'll get
> back to that a bit later.


## Methods

Object can also have any number of _methods_ - these are special properties, that
can also be _called_ (or invoked). These calls can be easily recognized by the
parentheses (`(…)`), immediately following the method name:
`myObject.callingThisMethod()`

When you invoke/call a function, the browser will execute some commands stored
in the method and will return a _value_. Sometimes this returned value depends on
other factors like the _parameters_ passed to the function. Parameters are the
optional values passed inside the invoking parentheses:
`myObject.methodWithParameters(1,2,3)`

The returned value of a function is like any value in JavaScript (could be a number,
string, or object or function even) and could be used similarly. Let's try this by
starting to explore our HTML document:

```js
document.querySelector('canvas#CodeInvaders');
```

Here we invoke the [`querySelector()`] method on the `document` object.
The call returns an [`HTMLCanvasElement`] object, that is inherently tied to the
`<canvas>` HTML-element on the page. We specify this by passing a CSS [selector](#) as
the first argument, which tells the method which exact HTML element we wish to retrieve.

The `"canvas#CodeInvaders"` selector basically tells the browser:
> give me the first `<canvas>` element on the current page, that has an `id`
> attribute set to `"CodeInvaders"`.


## Create your own

You can create your [own objects], with your own [properties](object-properties)
& [methods](object-methods).
We will talk more about this in [Functional Invaders](#).


[» Continue to the Next Quest](./ProcInvaders-02-Canvas.md)


[`document`]: http://devdocs.io/dom-document/

[`querySelector()`]: http://devdocs.io/dom/document/queryselector

[own objects]: http://devdocs.io/javascript/operators/object_initializer
[object-properties]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties
[object-methods]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_methods

[`HTMLCanvasElement`]: http://devdocs.io/dom/htmlcanvaselement
