---
layout: post
title: Using SVGs on HTML5 and CSS3
---

Using SVGs can be a little tricky at first depending on how you want to use them. There're some different ways to implement svgs on a web-page, to list some:

- In-line SVGs
- Using the `<img />` html tag
- Using `mask-image` css property

> There was a previous, easier way, of implementing SVGs using a method that leverage the `<use />` tag, but it seems to be **deprecated** currently.

So let's see how each one works

## In-line SVGs

This is straight forward but gives you all the control necessary to individually have access to each part of the svg, so you can change colors, size, and everything you want.

Just paste the svg where you want it to reside:

```html
<!--Previous Code-->

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="" />
</svg>

<!--Rest of the Code-->
```

## Using the `<img />` html tag

This one is also straight forward, it gives you cleaner readability at the cost of control of the svg. If all you want is to use the svg without changing anything, use this method.

The only thing you need to do is reference the svg file within the **src** property of the `<img />` tag.

```html
<img src="<PATH/TO/SVG>" width="<DESIRED WIDTH>" height="<DESIRED HEIGHT>" />
```

## Using `mask-image` css property

This method provides the readability of the `<img />` but let you gain a little more control over the color of the icon itself. You can't modify each path individually but all as a whole.

To implement icons using this approach, you gotta create a tag that will serve as the container of the icon, say a `<div />`, and add some styles to it.

```html
<style>
  .icon {
    width: "<DESIRED WIDTH>";
    height: "<DESIRED HEIGHT>";
    background-color: "<DESIRED COLOR>";
    mask-image: url("<PATH/TO/SVG>");
  }
</style>

<!--You can use 'icon' clas to display your icon-->
<div class="icon" />
```

What we're doing here is that we're creating a square (or rectangle) with the desired color as the background, leveraging _mask-image_ property to clip the div into the shape of the svg. Thus, gaining control of which color should the svg be.

## Conclussion

There may be another ways of implementing SVGs on your project, but my guess is that these three are the most used ones, also the quickest ones because we're relying on pure html and css reducing the total file size, thus, reducing the amount of data that needs to be sent over the network.

Try to choose using SVGs over images when possible, and use efficient compress algorithms (such as .webp) and CDNs when using images.

Hope this helps you, see you next time 👋🏻
