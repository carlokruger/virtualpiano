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
 * specify the key height and width. Sizes cannot be defined for inline kbd elements, so first you must change their type. There are several ways to do this. One of them is to set the display property with an inline-block value for all <kbd> tags — it will save the behavior of inline elements while allowing us to use some features that exist for block-level elements;
 * wrap all kbd tags in div with the container class and try to get rid of unnecessary indents;
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

## Stage 3/5: Application functionality
### Description
As good developers, we want our applications to be pretty. Yet it's not just the appearance that matters: functionality is also very important. To go through this stage, create a JavaScript file. In this file, write event handlers triggered when you press the seven keys you are working with: let the console print an individual message for each key. Your message should contain the key name enclosed in single quotes. For instance:

```The 'A' key is pressed.```
If some unbound key was pressed, a text should also appear in the console informing about this.

Make sure you connect the external scripts to the HTML. Otherwise, the new functionality of the musical instrument will not be available.
Check the result: the application should look the same, but now, eight different messages may appear in the console.

### Objectives
1. Create event handlers that, when you press the keys with the previously specified characters, will display messages to the console that they were pressed. Your message should contain the name of the key in single quotes.
2. If any other key is pressed, display a warning to the console about it.

## Stage 4/5: Let there be music
### Description
Having keys that do not produce sound is certainly good, but it does not fully reflect the concept of musical instruments. Fortunately, this problem is easy to fix.

Change the event handler so that when you press the A key, an audio object is created and played. You can use the [audio recordings](https://stepik.org/media/attachments/lesson/315625/white_keys.zip) we offer or specify yours. Check the result in a browser. Your piano has hopefully made its first sound!

If you have problems playing audio recordings, try to specify the path to them relative to the HTML file.
Perform this operation for the remaining six keys, and the stage will be considered complete.

### Objectives
1. Modify the event handlers so that <i>when you press the keys</i> instead of displaying messages in the console, <i>audio objects are created and played</i>.


## Stage 5/5: Adding and styling new keys
### Description
If you have a feeling that something is still missing, you're right: a piano has more than just the white keys. Create five black keys at the HTML document body using the kbd paired tag and bind them to the [corresponding sounds](https://stepik.org/media/attachments/lesson/315625/black_keys.zip).

Use letters W, E, T, Y, U for the black keys; position them approximately as they normally look on a real musical instrument.

For this to succeed, you need to slightly change the code you've already written and add new styles, taking into account the following points:

1. You already have the styles applied to the keys. To prevent conflict of existing and written properties in the future, wrap kbd responsible for white keys in the div tag with the white-keys class. Then you open the CSS file, fix the kbd selector to .white-keys kbd. Such a record means that it does not refer to tags, but only to tags that have the appropriate class. Check that the application didn't crash after editing the code and still displays the same view.
2. Wrap your new five keys in div too, but with the class black-keys.
3. New keys should be black. Do this by applying properties to the .black-keys kbd selector.
4. Place the black keys on top of the white keys and resize the black keys, remembering to set the ```display``` property to ```inline-block``` value.
Change the color of the letters that are responsible for your new keys. You can also change the font, size and formatting styles of the text if you want.
Use class or id attributes for the keys to which you want to set unique styles. For example, the location styles.
Congratulations, now you have a new project for your portfolio!

The project is over, yet your ambitions ask for more? After passing this stage, you can continue to develop and improve the project yourself. If you wish, you can represent the corpus piano, add animation when pressing keys, increase the number of keys or alter the sounds emitted, because right now you only have one octave. You can also learn CSS Flexbox or CSS Grid, arrays, template literals and other JS features that will help make your code shorter, cleaner and more readable. Good luck!

### Objectives
1. Create 5 kbd tags at the end of the HTML document body that will be responsible for the black keys: W, E, T, Y, U.
2. Create event handlers that play audio when keys with these characters are pressed.
3. Wrap white keys in tag div with class white-keys. You must have one div tag with a white-keys class for all white keys.
4. Wrap black keys in tag div with class black-keys. You must have one div tag with a black-keys class for all black keys.
5. Set the black background color to the keys you created at this stage.
6. Resize the black keys, remembering to set the display property to inline-block value.
7. Change the location of the black keys using positioning properties. When trying to position elements, do not forget that there should be only five black keys at this stage.
8. Change the color of the characters displayed on the black keys.

### Examples
#### Example 1: Example result after completing this stage
![virtual piano](https://ucarecdn.com/f7a62af7-f136-470c-8aa6-06813e85342d/)

