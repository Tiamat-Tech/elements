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

## Overview

The `@cndycd/core` package consists of atomic components used to assemble custom React component libraries with animations and interactivity powered by `react-spring` and `react-use-gesture`.


## Carousel

The following components can be used to create a custom `<Carousel>` component. Every rendered component accepts `className` and `style` props (in addition to any other prop accepted by a React DOM node) so custom CSS classes and styles may be applied to supplement the basic required styles. The contents of the included `styles.css` file must be manually added to the project's CSS for the carousel to function.


### API

The `<Provider>` component must be the parent of all other carousel components and accepts the following props.

| **prop**        | **default**    | type                          | **details**                                                  |
| --------------- | -------------- | ----------------------------- | ------------------------------------------------------------ |
| totalSlides     |                | number                        | **required**<br><br>the value must match the length of the `children` prop passed to the `<Track>` component |
| orientation     | `'horizontal'` | 'horizontal' or 'vertical'    | determines the orientation of the carousel track             |
| focusMode       | `'auto'`       | 'auto', 'manual', or 'always' | `'auto'`toggles keyboard, mouse, and touch interactivity based on whether or not the carousel is visible in the viewport<br><br>`'manual'` enables interactivity when the carousel is hovered, clicked, or touched and disables it when something outside the carousel is clicked or touched<br><br>`'always'` always enables interactivity; best when used for carousels that are permanently visible within in the viewport |
| inViewThreshold | `50`           | number                        | the number of pixels of the carousel that must be visible in the viewport before automatically gaining focus when `focusMode` is set to `'auto'` |
| allowGestures   | `true`         | bool                          | enable or disable mouse and touch gestures                   |
| dragThreshold   | `50`           | number                        | the number of pixels the track must be panned to initiate an automatic slide change |
| allowKeyboard   | `true`         | bool                          | enable or disable keyboard interactivity                     |
| keyboardMode    | `'standard'`   | 'standard' or 'gaming'        | `'standard'` listens to `ArrowUp`, `ArrowLeft`, `ArrowDown`, `ArrowRight` keyboard codes for advancing through slides<br><br>`'gaming'` listens to `KeyW`, `KeyA`, `KeyS`, and `KeyD` in addition to all `'standard'` keys |
| allowExpansion  | `true`         | bool                          | enable or disable expanded-mode support                      |
| allowFullscreen | `true`         | bool                          | enable or disable fullscreen-mode support                    |

The `<Wrapper>` component is placed within the `<Provider>` component and must contain a `<Track>` component and may optionally include a `<Drawer>` component or any other React nodes.

The `<Track>` component is placed within the `<Wrapper>` component and must contain one or more `<Slide>` components as direct children. Each `<Slide>` component contains the contents of one panel of the carousel.

The optional `<Drawer>` component may be placed placed within the `<Wrapper>` and can be used to contain one or more control elements or other React nodes.

The following control components include built-in interactivity on click and touch events. They may be placed anywhere within the `<Provider>` component and can accept a `children` prop to wrap its behavior around any React node.

- `<Start/>` moves to the first slide
- `<Backward>` moves to the previous slide
- `<Forward>` moves to the next slide
- `<End/>` moves to the last slide
- `<Expand>` toggles expanded mode
- `<Fullscreen>` toggles fullscreen mode


### Example

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

### Styles

#### Basic carousel functionality *(required)*

```css
.carousel {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-intersection-observer {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
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

#### Gesture functionality *(optional)*

```css
.carousel--gestures {
  touch-action: none;
}

.carousel--gestures * {
  user-select: none;
}
```

#### Expansion functionality *(optional)*

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

#### `<Drawer>` component *(optional)*

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


### Node dependencies
Use of the carousel components in a project requires that the following peer dependencies also be installed.

- `classnames`
- `prop-types`
- `react`
- `react-dom`
- `react-intersection-observer`
- `react-spring`
- `react-use-gesture`
- `react-use-measure`


## Hooks
The package includes several general-purpose custom hooks.

- `useEffectOnce`
- `useCallbackOnce`
- `useLocalStorage`
- `useOnClickOutside`


## Utilities
The package includes several general-purpose utility functions.

- `capitalize`
- `getFirst`
- `getMarkup`
- `isSSR`
- `take`
- `toCamelCase`
- `toSnakeCase`
