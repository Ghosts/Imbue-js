![Imbue logo](https://github.com/ghosts/imbue/blob/master/logo.png?raw=true)

Imbue was designed to replace some of the core features of jQuery, and provide a limited set of useful shortcuts and extensions on top of the standard NodeList, HTMLElement, HTMLDocument, and Array prototypes.

Some useful notes about Imbue:

- In most cases if a call fails or nothing is found, `undefined` is returned (similar to standard JS for selection)
- Imbue extends standard elements and is therefore interoperable with many other frameworks
- Methods and properties of Imbue often rename or call very simple native JS functions, nothing too fancy here
-  Due to use of the IntersectionObserver API Imbue is <b>not</b> compatible with IE. But it's also 2019, so why would it be? Imbue will work flawlessly on all modern browsers (and slightly not-so modern)
- Speed should be essentially on par with vanilla JS
- Imbue is **not** a framework, it will not completely replace something like jQuery, but it most likely can replace a majority of use-cases

The main focus of Imbue is to augment standard JavaScript to make it easier to use in regards to DOM manipulation, and provide added functions as shorthands for standard calls. One easy example that illustrates this is the call for `document.whenReady()`, similar to `$( document ).ready()`. If you mainly use jQuery for selectors, setting styles, and some helper functions, Imbue can replace it with a much smaller footprint and faster runtimes. An added benefit is that Imbue is closer to native JavaScript than jQuery, meaning less to learn. For instance, `document.getElement()` in Imbue is very similar to `document.getElementById()` in native JavaScript. All Imbue functions are added to element objects, original JavaScript methods are preserved for the DOM and can be used interchangeably and alongside the added Imbue methods.

_NOTE: this is a work in progress at the moment, contibutions appreciated!_

## CDN

`http://unpkg.com/imbue-js`

## NPM

`npm i imbue-js`

## Docs / Examples

[https://imbue.js.org](https://imbue.js.org "Imbue Website")
