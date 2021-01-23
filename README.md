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

The `@candycode/elements` library consists of atomic components used to assemble custom React component libraries with animations and interactivity powered by `react-spring` and `react-use-gesture`.

Note that peer dependencies must be installed separately. This library is intended for use in projects that already have `react-spring` and related packages installed for other purposes.

Feel free to [join us on Discord](https://discord.candycode.xyz/) for assistance.

<a href="https://discord.candycode.xyz/">
  <img alt="Discord" src="https://discord.com/assets/fc0b01fe10a0b8c602fb0106d8189d9b.png" height="64">
</a>


# Installation
1. Run `npm install @candycode/elements` or `yarn add @candycode/elements`.
2. Continue following instructions for one or more of the following component APIs.


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
| **allowGestures**                 | `true`         | `boolean`                                                    | enable/disable mouse and touch support                       |
| **dragThreshold**                 | `50`           | `number`                                                     | the number of pixels the track must be panned to initiate an automatic slide change |
| **allowKeyboard**                 | `true`         | `boolean`                                                    | enable/disable keyboard support                              |
| **keyboardMode**                  | `'standard'`   | `'standard'` or `'gaming'`                                   | `'standard'` listens to `↑`, `←`, `↓`,  `→` keyboard codes for moving through slides<br /><br />`'gaming'` listens to `W`, `A`, `S`, `D` in addition to all `'standard'` keys |
| **allowExpansion**                | `true`         | `boolean`                                                    | enable/disable expanded-mode support                         |
| **allowFullscreen**               | `true`         | `boolean`                                                    | enable/disable fullscreen-mode support                       |

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

<details><summary>📃 <b>Example &lt;Carousel&gt; assembly (unstyled)</b></summary>

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
} from "@candycode/elements/carousel";

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

<details><summary>📃 <b>Example &lt;Carousel&gt; assembly (with styles and icons)</b></summary>

```javascript
import React from "react";
import {
  Provider,
  Wrapper,
  Track,
  Slide,
  Drawer,
  Backward,
  Forward,
  Expand,
  Fullscreen,
} from "@candycode/elements/carousel";

import { BackIcon, NextIcon, ExpandIcon, FullscreenIcon } from './icons'

export const Carousel = ({ children, ...rest }) => {
  return (
    <Provider totalSlides={children.length ? children.length : 1} {...rest}>
      <Wrapper>
        <Track>
          {children.length ? (
            children.map((child, index) => <Slide key={index} className="pb-16">{child}</Slide>)
          ) : (
            <Slide className="pb-16">{children}</Slide>
          )}
        </Track>
        <Backward className="absolute left-0 p-4">
          <BackIcon />
        </Backward>
        <Forward className="absolute right-0 p-4">
          <NextIcon />
        </Forward>
        <Drawer className="h-16 bg-black bg-opacity-50 text-white">
          <Expand className="p-4">
            <ExpandIcon />
          </Expand>
          <Fullscreen className="p-4">
            <FullscreenIcon />
          </Fullscreen>
        </Drawer>
      </Wrapper>
    </Provider>
  );
};
```
</details>

<details><summary>📃 <b>Example &lt;Carousel&gt; usage</b> (based on implementations above)</summary>

```javascript
import React from 'react';
import { Carousel } from './carousel';

export const Pokemon = () => {
  return (
    <Carousel>
      <div>Bulbasaur</div>
      <div>Charmander</div>
      <div>Squirtle</div>
      <div>Pikachu</div>
      <div>Eevee</div>
      <div>Togepi</div>
    </Carousel>
  )
}
```
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
.carousel--expanded > div {
  position: fixed !important;
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
- `react-dom`
- `react-intersection-observer`
- `react-spring`
- `react-use-gesture`
- `react-use-measure`
- `react`
</details>

# Disclosure

<details><summary>📃 <b>Component API</b></summary>

These atomic components can be used to assemble a custom **&lt;Disclosure&gt;** component. Every component accepts `className` and `style` props (as well as all other props accepted by a React DOM node) to facilitate custom designs.

## Disclosure components

The **&lt;Provider&gt;** component is the main export and accepts the following props.

| **prop**                  | **default** | type                                                         | **details**                                                  |
| ------------------------- | ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **uid**<br />*(required)* |             | `string`                                                     | unique identifier linking the disclosure panel and button    |
| **springConfig**          | `'default'` | `'default'`, `'gentle'`, `'wobbly'`, `'stiff'`, `'slow'`, `'molasses'`, or `{ mass: number, tension: number, friction: number }` | determines the settings used to power the disclosure animation |

The **&lt;Button&gt;** subcomponent must be exported as `Disclosure.Button`. It toggles the visibility of the &lt;Panel&gt; component.

The **&lt;Panel&gt;** subcomponent must be exported as `Disclosure.Panel`. Its visibility is toggled by the &lt;Button&gt; component.
</details>

<details><summary>📃 <b>Example &lt;Disclosure&gt; assembly</b></summary>

```javascript
import React from 'react';
import { Provider, Button, Panel } from '@candycode/elements/disclosure';

export const Disclosure = ({ children, ...rest }) => {
  return <Provider {...rest}>{children}</Provider>;
};

const CustomButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

const CustomPanel = ({ children, ...rest }) => {
  return <Panel {...rest}>{children}</Panel>;
};

Disclosure.Button = CustomButton;
Disclosure.Panel = CustomPanel;
```
</details>

<details><summary>📃 <b>Example &lt;Disclosure&gt; usage</b> (based on implementation above)</summary>

```javascript
import React from 'react';
import { Disclosure } from './disclosure';

export const FAQ = () => {
  return (
    <>
      <Disclosure uid="faq_1">
        <Disclosure.Button>Who’s that Pokémon?</Disclosure.Button>
        <Disclosure.Panel>It’s Pikachu!</Disclosure.Panel>
      </Disclosure>
      <Disclosure uid="faq_2">
        <Disclosure.Button>What’s Pikachu's Pokédex ID?</Disclosure.Button>
        <Disclosure.Panel>Twenty five.</Disclosure.Panel>
      </Disclosure>
      <Disclosure uid="faq_3">
        <Disclosure.Button>Where’s Pikachu found?</Disclosure.Button>
        <Disclosure.Panel>Viridian Forest.</Disclosure.Panel>
      </Disclosure>
    </>
  )
}
```
</details>

<details><summary>📃 <b>Node dependencies</b></summary>

Use of the assembled **&lt;Disclosure&gt;** component requires the following peer dependencies.

- `jotai`
- `react-dom`
- `react-spring`
- `react-use-measure`
- `react`
</details>

# Future development

The library is currently in active development. Existing components will receive additional functionality. New components will include:

- &lt;Accordion&gt; (in development)
- &lt;Lightbox&gt;
- &lt;Modal&gt;
- &lt;Reveal&gt;
- &lt;Screen&gt;
- &lt;Slide&gt;
- &lt;Tabs&gt;
- &lt;Wobble&gt;

