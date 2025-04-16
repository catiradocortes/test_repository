# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6



## Emphasis

You can emphasise text in Markdown by making it bold or italic.

**Bold Text** or __Bold Text__

*Italic Text* or _Italic Text_


## Lists
Markdown supports both ordered and unordered lists.

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

Ordered Lists:
1. First Item
2. Second Item
3. Third Item


## Links
To create a hyperlink, you can use the following format:

[Link Text](https://www.google.com)
    

### Images with existing links

Images can be added similarly to links but with an added ! at the beginning:

![An image of a cat](https://placekitten.com/200/300)
    


### Custom Images

To add custom images we need to upload them somewhere so we can give a URL. When we use markdown to create a readme.md for our GitHub repo we can reference images in our repo. 

- The first thing we need to do is to create a new folder in our project and add the images we want to it. Let's try it and name the folder readmeImages.
- Now let's copy our Mona Lisa image, Mona_Lisa_by_Leonardo_da_Vinci_500_x_700.jpg, into the folder.
- Now we can reference the image with a relative path and both VSCode and GitHub will recognise it.

Lets try this: 

![An image of the Mona Lisa](readmeImages/Mona_Lisa_by_Leonardo_da_Vinci_500_x_700.jpg)
    


## Code Blocks

You can include code by wrapping it in backticks. For inline code, use a single backtick: `inline code`. For multi-line code blocks, use three backticks:

```
function helloWorld(){
    console.log ("Hello World!");
}
```

## Blockquotes
To create a blockquote, use the > symbol:

> This is a blockquote


This should be enough information about markdown for you to complete this weeks quiz and your assignment.