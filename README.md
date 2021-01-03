&nbsp;

&nbsp;

<div align="center">
  <a href="https://candycode.co/">
    <img alt="candycode" src="https://storage.googleapis.com/candycode/candycode.svg" height="64">
  </a>
</div>
<div align="center">
  Basic ingredients for baking custom React components spiced with spring physics. 🧁
</div>

&nbsp;

&nbsp;

# Overview

The `@cndycd/core` package consists of atomic components used to assemble custom React component libraries with animations and interactivity powered by `react-spring` and `react-use-gesture`.

# Carousel

<details><summary>📃 <b>Component API</b></summary>

These atomic components can be used to assemble a custom **&lt;Carousel&gt;** component. Every rendered component accepts `className` and `style` props (as well as all other props accepted by a React DOM node). These props may be used to supplement the basic styles provided in the `styles.css` file, which must be manually added to the project and contain only the minimal CSS necessary for the carousel to function.

## Carousel state

### Provider

A **&lt;Provider&gt;** component must be the parent of all other carousel components and accepts the following props.

| **prop**                          | **default**    | type                                                         | **details**                                                  |
| --------------------------------- | -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **totalSlides**<br />*(required)* |                | `number`                                                     | the value must match the length of the `children` prop passed to the &lt;Track&gt; component |
| **aspectRatio**                   | `undefined`    | `undefined`, `'square'`, `'wide'`, `'wider'`, `'widest'`, `'tall'`, `'taller'`, or `'tallest`' | enables and sets a fixed aspect ratio for the carousel       |
| **orientation**                   | `'horizontal'` | `'horizontal'` or `'vertical'`                               | determines the orientation of the carousel track (experimental) |
| **springConfig**                  | `'default'`    | `'default'`, `'gentle'`, `'wobbly'`, `'stiff'`, `'slow'`, `'molasses'`, or `{ mass: number, tension: number, friction: number }` | determines the settings used to power the carousel animations |
| **focusMode**                     | `'auto'`       | `'auto'`, `'manual'`, or `'always'`                          | `'auto'` toggles keyboard, mouse, and touch interactivity based on whether or not the carousel is visible in the viewport<br /><br />`'manual'` enables interactivity when the carousel is hovered, clicked, or touched and disables it when something outside the carousel is clicked or touched<br /><br />`'always'` always enables interactivity; best when used for carousels that are permanently visible within in the viewport |
| **inViewThreshold**               | `0.1`          | `number`                                                     | the number between `0` and `1` indicating the percentage of the carousel that must be visible in the viewport before automatically gaining focus when `focusMode` is set to `'auto'` |
| **allowGestures**                 | `true`         | `bool`                                                       | enable/disable mouse and touch support                       |
| **dragThreshold**                 | `50`           | `number`                                                     | the number of pixels the track must be panned to initiate an automatic slide change |
| **allowKeyboard**                 | `true`         | `bool`                                                       | enable/disable keyboard support                              |
| **keyboardMode**                  | `'standard'`   | `'standard ` or `'gaming'`                                   | `'standard'` listens to `↑`, `←`, `↓`,  `→` keyboard codes for moving through slides<br /><br />`'gaming'` listens to `W`, `A`, `S`, `D` in addition to all `'standard'` keys |
| **allowExpansion**                | `true`         | `bool`                                                       | enable/disable expanded-mode support                         |
| **allowFullscreen**               | `true`         | `bool`                                                       | enable/disable fullscreen-mode support                       |


## Carousel elements

### Wrapper
A **&lt;Wrapper&gt;** component must be placed somewhere within the &lt;Provider&gt; component. It must contain a &lt;Track&gt; component. It may also include a &lt;Drawer&gt; component and other React nodes.

### Track
A **&lt;Track&gt;** component must be placed somewhere within the &lt;Wrapper&gt; component. It must contain one or more &lt;Slide&gt; components as direct children.

### Slide
Each **&lt;Slide&gt;** component must be placed directly under the &lt;Track&gt; component. Each &lt;Slide&gt; can only accept one direct child node, which will be stretched to cover the entire slide.

### Drawer
A **&lt;Drawer&gt;** component may be placed somewhere within the &lt;Wrapper&gt; component, but outside the &lt;Track&gt; component. It can be used to contain one or more control elements or other React nodes.

## Controls
The following control components include built-in interactivity on click and touch events. They may be placed anywhere within the &lt;Provider&gt; component and can accept a `children` prop to wrap its logic and behavior around any React node.

- **&lt;Start&gt;** moves to the first slide
- **&lt;Backward&gt;** moves to the previous slide
- **&lt;Forward&gt;** moves to the next slide
- **&lt;End&gt;** moves to the last slide
- **&lt;Expand&gt;** toggles expanded mode
- **&lt;Fullscreen&gt;** toggles fullscreen mode
</details>

<details><summary>📃 <b>Supporting styles</b></summary>

Use of the assembled **&lt;Carousel&gt;** component requires the following styles.

## Basic carousel functionality *(required)*

```css
.carousel {
  position: relative;
  overflow: hidden;
}

.carousel > div {
  display: flex;
}

.carousel-track {
  position: relative;
  z-index: 0;
  display: flex;
  height: 100%;
}

.carousel-slide {
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  min-height: 100%;
  height: 100%;
  max-height: 100%;
}

.carousel-slide > * {
  min-width: 100% !important;
  width: 100% !important;
  max-width: 100% !important;
  min-height: 100% !important;
  height: 100% !important;
  max-height: 100% !important;
}

.carousel-slide img {
  pointer-events: none !important;
  user-select: none !important;
}

.carousel-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

## Aspect ratio functionality *(optional)*

```css
[class*='carousel--aspect-ratio-'] {
  height: 0;
}

[class*='carousel--aspect-ratio-'] > div {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.carousel--aspect-ratio-square {
  padding-top: 100%;
}

.carousel--aspect-ratio-wide {
  padding-top: 75%;
}

.carousel--aspect-ratio-wider {
  padding-top: 56.25%;
}

.carousel--aspect-ratio-widest {
  padding-top: 42.1875%;
}

.carousel--aspect-ratio-tall {
  padding-top: 133.333333%;
}

.carousel--aspect-ratio-taller {
  padding-top: 177.777778%;
}

.carousel--aspect-ratio-tallest {
  padding-top: 233.333333%;
}
```

## Gesture functionality *(optional)*

```css
.carousel--gestures {
  touch-action: none;
}

.carousel--gestures * {
  user-select: none;
}
```

## Expansion functionality *(optional)*

```css
.carousel--expanded {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
}
```

## **&lt;Drawer&gt;** component *(optional)*

```css
.carousel-drawer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
```
</details>

<details><summary>📃 <b>Node dependencies</b></summary>

Use of the assembled **&lt;Carousel&gt;** component requires the following peer dependencies.

- `classnames`
- `jotai`
- `prop-types`
- `react-dom`
- `react-intersection-observer`
- `react-spring`
- `react-use-gesture`
- `react-use-measure`
- `react`
</details>

<details><summary>📃 <b>Example &lt;Carousel&gt;</b></summary>

```javascript
import React from "react";
import {
  Provider,
  Wrapper,
  Track,
  Slide,
  Drawer,
  Start,
  Backward,
  Forward,
  End,
  Expand,
  Fullscreen,
} from "@cndycd/core/carousel";

export const Carousel = ({ children, ...rest }) => {
  return (
    <Provider totalSlides={children.length ? children.length : 1} {...rest}>
      <Wrapper>
        <Track>
          {children.length ? (
            children.map((child, index) => <Slide key={index}>{child}</Slide>)
          ) : (
            <Slide>{children}</Slide>
          )}
        </Track>
        <Drawer>
          <Start />
          <Backward />
          <Expand />
          <Fullscreen />
          <Forward />
          <End />
        </Drawer>
      </Wrapper>
    </Provider>
  );
};
```
</details>

# Other

<details><summary>📃 <b>Hooks</b></summary>

The package includes several general-purpose custom hooks.

- `useEffectOnce`
- `useCallbackOnce`
- `useLocalStorage`
- `useOnClickOutside`
</details>

<details><summary>📃 <b>Utilities</b></summary>

The package includes several general-purpose utility functions.

- `capitalize`
- `getFirst`
- `getMarkup`
- `isSSR`
- `take`
- `toCamelCase`
- `toSnakeCase`
</details>
