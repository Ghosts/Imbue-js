# Imbue

Imbue is meant to provide a vanilla-javascript friendly development experience.

To accomplish this, Imbue provides prototype extensions for the document and HTML elements, allowing you to access standard JavaScript functionality in an easier way.

Imbue should be nearly as fast as vanilla JS, but hopefully easier to work with.

## Examples:

### HTMLDocument

``` document.getElement("p") // returns first p elements```

```document.getElements("p") // returns all p elements```

```document.getElement("p", context) // optionally provide context (default is document)```

* * *

```document.whenReady(function() { // code here }); // ran when document is ready```

```document.whenReady(() => { // code here });```

### HTMLElement

Using "element" as example (usually something retrieved from an above "get" function)

```element.appendChild(`<div> Child Content </div>`)```

```element.appendSibling(`<div> Sibling Content </div>`)```
* * *

```element.removeClass("classToRemove")```

```element.setClassList("this will be the class list")```

```element.toggleClass("nightMode")```

```element.hasClass("nightMode") // true or false```
* * *

```element.getStyles()```

```element.setStyles({"background-color" : "red"})```

```element.removeStyles(["background-color", "color"])```

```element.removeStyle("background-color")```
* * *

```element.getParent() // same as parentNode```

```element.getSiblings() // retrieve array of sibling nodes```

```element.getChildren() // same as childNodes```
* * *

```element.getSelectedValue() // retrieves first selected checkbox / selected option```

```element.getSelectedValues() // retrieves all selected checkbox / selected options```
* * *

```element.getData("id") // gives value of data-id attribute```

```element.removeData("id") // removes data-id attribute```

```element.setData("id", 5) // sets data-id=5```
* * *

```element.hide() // hide element```

```element.show() // show element```
* * *

```element.HTML // same as innerHTML```

### NodeList

All above methods should work automatically with a NodeList returned from document.getElements()

### AJAX

```POST(url, data, callback)```

```GET(url, callback)```

</div>

</div>