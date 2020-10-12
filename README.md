# Virtual Piano

## Stage 1/5: Add markup
### Description

To go through the first step, change the page title.

The kbd tag is used to denote the text to be typed on the keyboard or for a key name (you can read more about it [on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd)). Use this paired tag in the body of the document to specify seven keys on the keyboard: clicking these will eventually create charming sounds of your instrument. You must have the symbols A, S, D, F, G, H and J placed in this tag. These will be the white keys on the piano.

If you open this HTML file in your browser, you'll see the names of the keyboard keys. These keys do not make sounds yet, but you're one step closer to creating a working virtual piano.

### Objectives

Change the page title.

Add 7 kbd tags to the document body. In each of them enclose one of the symbols: A, S, D, F, G, H or J.

### Examples

#### Example 1: In the browser, the result of this step will look like this:
![piano](https://ucarecdn.com/b10f5435-f03d-4f98-b9e3-1b1e56491b8f/)

## Stage 2/5: Page styling
### Description
At the moment, your application doesn't exactly please the eye. It's hard to imagine that soon the letters will turn into a virtual instrument. Let's make this happen!

Use CSS to give your piano its unique design:

 * change the background of the web page: you can choose any color;
 * make the keys white (recommended for a classic piano look);
 * make sure that all piano keys are in the same row;
 * specify the key height and width. Sizes cannot be defined for inline <kbd> elements, so first you must change their type. There are several ways to do this. One of them is to set the display property with an inline-block value for all <kbd> tags — it will save the behavior of inline elements while allowing us to use some features that exist for block-level elements;
 * wrap all <kbd> tags in <div> with the container class and try to get rid of unnecessary indents;
 * use the border property so that you can see the separation of the keys;
 * place the piano in the center of the screen;
 * optionally, you can center the captions of the keys horizontally by applying the text-align property with the center value to it.

It’s often difficult to find the right values for your selectors. In such cases, you can open an HTML file in your browser, call web development tools (usually done with Ctrl+Shift+I or Cmd+Opt+I) and try to apply styles to elements directly in them. If you opt to do that, don't forget to copy them and transfer them to your CSS file!

Remember to include the CSS file in the HTML. Otherwise, all your style choices will not be displayed.

### Objectives
1. Change the page background color.
2. Change the key background color to white.
3. Set the size of the keys.
4. Wrap kbd tags in div with container class.
5. Remove the distance between the keys. For example, you can do it with the margin-left property.
6. Set boundaries for kbd elements.
7. Place the piano in the center of the screen.

### Examples
#### Example 1: Working in a development tool
![dev tools](https://ucarecdn.com/2a5c6001-6730-4d90-975a-7c907c719618/)


#### Example 2: Example result after completing this stage
![piano](https://ucarecdn.com/c8e71ac9-d935-4423-8abb-e094a817071c/)
