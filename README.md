# Grid Overlay

This is a small JavaScript + CSS component for adding a grid overlay to the page.

## Installation

Copy the files from the `build/` folder and add them to the `<head>` section:

```html
<link rel="stylesheet" href="/path/to/grid-overlay.css">
<script type="module" src="/path/to/grid-overlay.js"></script>
```

Or, if you've got your own build system, you can take the files from the `src/`
folder instead and include them any which way you're used to.

> [!NOTE]
> The JavaScript reads a [Custom CSS Property][CCSSP] to decide how many columns to create,
> so make sure to the script doesn't execute before the CSS has loaded (this _should_ be
> handled by using `<script type="module">` though).

## Displaying

The grid can be displayed by adding a debug class to the page's `<html>` (or `<body>`) element.

I use a bookmarklet to quickly toggle this on and off, like this:

```javascript
javascript:(function()%7Bvar%20htmlNode%20=%20document.querySelector(%22html%22);htmlNode.classList.toggle(%22debug%22);%7D)()
```

Here's the unencoded version:

```javascript
javascript:(function(){var htmlNode=document.querySelector("html");htmlNode.classList.toggle("debug");})()
```

## Customization

The overlay is controlled by a group of CSS Custom Properties, that are defined on the :root,
so can be overridden where necessary - these are the defaults:

```css
:root {
	--go-columns: 16;
	--go-gap-size: 20;
	--go-max-width: 1440;
	--go-side-padding: 0;
	--go-color: #ff8000;
}
```

| Name           | Description                    |
|----------------| -------------------------------|
| `columns`      | Number of columns to create    |
| `gap-size`     | Size of gaps between columns   |
| `max-width`    | Maximum width of the full grid |
| `side-padding` | Amount of padding on each side (i.e., when the screen is smaller than `max-width`) |
| `color`        | Color for the columns          |

