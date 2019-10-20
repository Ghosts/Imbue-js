# Imbue

![Imbue logo](https://github.com/ghosts/imbue/blob/master/logo.png)

Imbue was designed to replace some of the core features of jQuery, and provide a limited set of useful shortcuts and extensions on top of the standard NodeList, HTMLElement, and HTMLDocument prototypes.

Some useful notes about Imbue:

- In most cases if a call fails or nothing is found, `undefined` is returned (similar to standard JS for selection)
- Imbue extends standard elements and is therefore interoperable with many other frameworks
- Methods and properties of Imbue often rename or call very simple native JS functions, nothing too fancy here
- Speed should be essentially on par with vanilla JS
- Imbue is **not** a framework, it will not completely replace something like jQuery, but it most likely can replace a majority of use-cases

The main focus of Imbue is to augment standard JavaScript to make it easier to use in regards to DOM manipulation, and provide added functions as shorthands for standard calls. One easy example that illustrates this is the call for `document.whenReady()`, similar to `$( document ).ready()`. If you mainly use jQuery for selectors, setting styles, and some helper functions, Imbue can replace it with a much smaller footprint and faster runtimes. An added benefit is that Imbue is closer to native JavaScript than jQuery, meaning less to learn. For instance, `document.getElement()` in Imbue is very similar to `document.getElementById()` in native JavaScript. All Imbue functions are added to element objects, original JavaScript methods are preserved for the DOM and can be used interchangeably and alongside the added Imbue methods. The

_NOTE: this is a work in progress at the moment, contibutions appreciated!_

## Examples:

### HTMLDocument

`document.getElement("p") // returns first p elements`

`document.getElements("p") // returns all p elements`

`document.getElement("p", context) // optionally provide context (default is document)`

---

`document.whenReady(function() { // code here }); // ran when document is ready`

`document.whenReady(() => { // code here });`

### HTMLElement

Using "element" as example (usually something retrieved from an above "get" function)

`` element.appendChild(`<div> Child Content </div>`) ``

`` element.appendSibling(`<div> Sibling Content </div>`) ``

---

`element.removeClass("classToRemove")`

`element.setClassList("this will be the class list")`

`element.toggleClass("nightMode")`

`element.hasClass("nightMode") // true or false`

---

`element.getStyles()`

`element.setStyles({"background-color" : "red"})`

`element.removeStyles(["background-color", "color"])`

`element.removeStyle("background-color")`

---

`element.getParent() // same as parentNode`

`element.getSiblings() // retrieve array of sibling nodes`

`element.getChildren() // same as childNodes`

---

`element.getSelectedValue() // retrieves first selected checkbox / selected option`

`element.getSelectedValues() // retrieves all selected checkbox / selected options`

---

`element.getData("id") // gives value of data-id attribute`

`element.removeData("id") // removes data-id attribute`

`element.setData("id", 5) // sets data-id=5`

---

`element.hide() // hide element`

`element.show() // show element`

---

`element.HTML // same as innerHTML`

### NodeList

All above methods should work automatically with a NodeList returned from document.getElements()

### AJAX

`POST(url, data, callback)`

`GET(url, callback)`

</div>

</div>
