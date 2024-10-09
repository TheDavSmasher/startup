# CS 260 Notes

Here's the main [Readme File](https://github.com/TheDavSmasher/startup/blob/main/README.md).

Writing better MDs files with [this link](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

VSCode makes git integration so much easier.
Merge Conflicts can be resolved entirely within VSCode with the options after pulling.

Public Elastic IP Address: <http://98.82.51.70>

Make sure to keep it running to avoid costs.

SSHing into EC2 server instance: ssh -i ../production.pem ubuntu@98.82.51.70

Can also be done from Home with: ssh -i '~/Documents/BYU/CS 260/production.pem' ubuntu@98.82.51.70

I have rented the <http://pixelshare.click> domain, redirected to my elastic IP.

In HTML, you can use \<div\> to separate diferent areas of a screen. \<a href=link\> will insert a hyperlink in the text provided after the identifier. Images are similar, except it's \<img src=location\>. Add style=width:#px; for specific size.

Input fields can have labels with label for="id" of the input field. Input fields are typed, can have id, need a name and value.

Color default values are assigned with "#rrggbb" hex code. Input fields can have placeholder text, default values, and a pattern (defined with regex).

For selectors defaults, mark an option as selected. For checkbox, mark as checked.

HTML is extremely barebones but will serve as the skeleton of the webpage once it's done.

You can have a head with some metadata, and inside the body a header, main, and footer sections.

CSS Flex:

- flex: 0 height; will lock is width and not be a part of flex changes.
- flex: n; will give the element the nth portion of the parent's flex display size.
- display: flex; will allow you to edit the position and size of everything inside the element, relative to the parent. It does not propagate, and each element needs to mark this for its children to have flex within it.
- align-items is vertical, justify-content is horizontal.
- flex-direction: row/column; will determine which direction its children will align.

JavaScript:

To add JavaScript to HTML, I need to add a \<script\> element, which can either be straight up functions or have the src attribute to the js file. Now certain attributes of elements can call these functions.

Elements have an onclick attribute that can call one of these functions. Other events exist, and can be set by either `element.addEventListener(event, function (event))` or marking it directly on the HTML.

All elements have a textContent, innerText, and innerHTML attributes. Directly modifying the innerHTML will completely rewrite the element.

You can add elements by creating new nodes with `document.createElement(type)`. This child can have its attributes modified. To actually add it, you need a parent element to call `parent.appendChild(newChild)` so it becomes part of the HTML structure. `element.removeChild(oldChild)` can also be used to remove existing elements.

Other useful element functions are `querySelectorAll(type)` to get all elements of a given type, `document.createTextNode(string)` which creates an element of only text, `element.setAttribute(attribute, value)` which can set any pre- or undefined attributes to the given value or function, and `document.styleSheet[i].insertRule(cssRuleString, index)` to also add CSS.
