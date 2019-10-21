// Begin HTMLDocument Functions
HTMLDocument.prototype.getElements = function(selector, context) {
  return (context || document).querySelectorAll(selector);
};

HTMLDocument.prototype.getElement = function(selector, context) {
  return (context || document).querySelector(selector);
};
HTMLDocument.prototype.whenReady = function(callback) {
  // in case the document is already rendered
  if (document.readyState != "loading") callback();
  // modern browsers
  else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", callback);
  // IE <= 8
  else
    document.attachEvent("onreadystatechange", function() {
      if (document.readyState == "complete") callback();
    });
};
// End HTMLDocument Functions

// End HTMLElement Functions
HTMLElement.prototype.appendChild = function(template) {
  this.innerHTML += template;
};

HTMLElement.prototype.appendSibling = function(template) {
  this.parentNode.innerHTML += template;
};

HTMLElement.prototype.removeClass = function(className) {
  this.classList.remove(className);
};

HTMLElement.prototype.addClass = function(className) {
  this.classList.add(className);
};

HTMLElement.prototype.setClassList = function(classList) {
  this.classList = classList;
};

HTMLElement.prototype.toggleClass = function(className) {
  this.classList.toggle(className);
};

HTMLElement.prototype.hasClass = function(className) {
  return this.classList.contains(className);
};

HTMLElement.prototype.getStyles = function() {
  return this.classList.getAttribute("style");
};

HTMLElement.prototype.setStyles = function(styles) {
  for (var prop in styles) {
    this.style[prop] = styles[prop];
  }
};

HTMLElement.prototype.removeStyle = function(style) {
  this.style[style] = null;
};

HTMLElement.prototype.removeStyles = function(styles) {
  for (var i = 0; i < styles.length; i++) {
    this.style[styles[i]] = null;
  }
};

HTMLElement.prototype.removeAllStyles = function() {
  this.classList.setAttribute("style", null);
};

HTMLElement.prototype.getParent = function() {
  return this.parentNode;
};

HTMLElement.prototype.getSiblings = function() {
  var siblings = [];
  var el = this.parentNode.firstChild;
  do {
    isiblings.push(el);
  } while ((el = el.nextSibling));
  return siblings;
};

HTMLElement.prototype.getChildren = function() {
  return this.childNodes;
};

HTMLElement.prototype.HTML = this.innerHTML;

HTMLElement.prototype.getSelectedValue = function() {
  var checked = _GetElement("input :checked", this);
  return !checked
    ? checked.options[checked.selectedIndex]
      ? checked.options[checked.selectedIndex]
      : undefined
    : undefined;
};

HTMLElement.prototype.getSelectedValues = function() {
  var checked = _GetElements("input :checked", this);
  return !checked
    ? checked.options[checked.selectedIndex]
      ? checked.options[checked.selectedIndex]
      : undefined
    : undefined;
};

HTMLElement.prototype.getData = function(key) {
  if (!key) return undefined;
  return this.getAttribute(`data-${dataId}`);
};

HTMLElement.prototype.removeData = function(key) {
  if (!key) return undefined;
  this.removeAttribute(`data-${key}`);
};

HTMLElement.prototype.setData = function(key, value) {
  if (!key) return undefined;
  this.setAttribute(`data-${key}`, value);
};

HTMLElement.prototype.hide = function() {
  this.style.display = "none";
};

HTMLElement.prototype.show = function() {
  this.style.display = "";
};

// End HTMLElement Functions

// Begin NodeList Functions

NodeList.prototype.setClass = function(classList) {
  for (var i = 0; i < this.length; i++) {
    this[i].classList = classList;
  }
};

NodeList.prototype.removeClass = function(className) {
  for (var i = 0; i < this.length; i++) {
    this[i].classList.remove(className);
  }
};

NodeList.prototype.addClass = function(className) {
  for (var i = 0; i < this.length; i++) {
    this[i].classList.add(className);
  }
};

NodeList.prototype.toggleClass = function(className) {
  for (var i = 0; i < this.length; i++) {
    this[i].classList.toggle(className);
  }
};

NodeList.prototype.getStyles = function() {
  var styles = [];
  for (var i = 0; i < this.length; i++) {
    styles.push(this[i].classList.getAttribute("style"));
  }
  return styles;
};

NodeList.prototype.setStyles = function(styles) {
  for (var i = 0; i < this.length; i++) {
    for (prop in styles) {
      this[i].style[prop] = styles[prop];
    }
  }
};

NodeList.prototype.removeAllStyles = function() {
  for (var i = 0; i < this.length; i++) {
    this[i].classList.setAttribute("style", null);
  }
};

NodeList.prototype.removeStyles = function() {
  for (var i = 0; i < this.length; i++) {
    this[i].style[prop] = null;
  }
};

// End NodeList Functions

//Begin Array Functions

Array.prototype.distinct = function() {
  return Array.from(new Set(this));
};
//End Array Functions

// Begin AJAX Functions
function POST(url, data, success) {
  var params =
    typeof data == "string"
      ? data
      : Object.keys(data)
          .map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
          })
          .join("&");

  var xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open("POST", url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState > 3 && xhr.status == 200) {
      success(xhr.responseText);
    }
  };
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(params);
  return xhr;
}

function GET(url, success) {
  var xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open("GET", url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState > 3 && xhr.status == 200) success(xhr.responseText);
  };
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.send();
  return xhr;
}

// End AJAX Functions
