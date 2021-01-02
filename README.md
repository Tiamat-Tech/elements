&nbsp;

&nbsp;

<div align="center">
  <a href="https://candycode.co/">
    <img alt="candycode" src="https://storage.googleapis.com/candycode/candycode.svg" height="64" />
  </a>
</div>
<div align="center">
  Basic ingredients for baking custom components with interactive elements spiced with spring physics. 🧁
</div>

&nbsp;

&nbsp;

## Overview

The `@cndycd/core` package consists of atomic components used to assemble custom React components with animations and interactivity powered by `react-spring` and `react-use-gesture`.


## Carousel component

The following components can be used to easily assemble a custom `<Carousel />` component powered with spring physics. Each component accepts `className` and `style` props (in addition to any other prop accepted by a React DOM node) so custom CSS classes and styles may be applied to supplement the basic styles required in the included `styles.css` file, which must be manually added to the project's CSS for the carousel to function.


### Carousel State

The `<Provider />` component must be the parent of all other carousel components and accepts the props below.

| **prop**        | **default**    | type                          | **details**                                                  |
| --------------- | -------------- | ----------------------------- | ------------------------------------------------------------ |
| totalSlides     |                | number                        | **required**: must match the value of the `children` prop passed to the `<Track>` component<br /><br />effectively `children.length` of the `<Track>` component |
| orientation     | `'horizontal'` | 'horizontal' or 'vertical'    | determines the orientation of the carousel track             |
| focusMode       | `'auto'`       | 'auto', 'manual', or 'always' | `'auto'`toggles keyboard, mouse, and touch interactivity based on whether or not the carousel is visible in the viewport<br /><br />`'manual'` enables interactivity when the carousel is hovered, clicked, or touched and disables it when something outside the carousel is clicked or touched<br />`'always'` always enables interactivity; best when used for carousels that are permanently visible within in the viewport |
| inViewThreshold | `50`           | number                        | number of pixels of the carousel that must be visible in the viewport before automatically gaining focus when `focusMode` is set to `'auto'` |
| allowGestures   | `true`         | bool                          | enable or disable mouse and touch gestures                   |
| dragThreshold   | `50`           | number                        | determines the number of pixels must be passed to initiate a slide change |
| allowKeyboard   | `true`         | bool                          | enable or disable keyboard interactivity                     |
| keyboardMode    | `'standard'`   | 'standard' or 'gaming'        | `'standard'` listens to `ArrowUp`, `ArrowLeft`, `ArrowDown`, `ArrowRight` keyboard codes for advancing through slides<br /><br />`'gaming'` listens to `KeyW`, `KeyA`, `KeyS`, and `KeyD` in addition to all 'standard' keys |
| allowExpansion  | `true`         | bool                          | enable or disable expanded-mode support                      |
| allowFullscreen | `true`         | bool                          | enable or disable fullscreen-mode support                    |


### Carousel Elements
The `<Wrapper />` component is placed within the `<Provider />` component and must contain a `<Track />` component and may optionally include a `<Drawer />` component or any other React nodes.

The `<Track />` component is placed within the `<Wrapper />` component and must contain one or more `<Slide />` components as direct children. Each `<Slide />` component contains the contents of one panel of the carousel.

The optional `<Drawer />` component may be placed placed within the `<Wrapper />` and be used to contain one or more control elements or other React nodes.


### Carousel Controls
The control components may be placed anywhere else within the `<Provider />` component and will have the same behavior:

- `<Start/>` to move to the first slide
- `<Backward />` to move to the previous slide
- `<Forward />` to move to the next slide
- `<End/>` to move to the last slide
- `<Expand />` to toggle expanded mode
- `<Fullscreen />` to toggle fullscreen mode


### Example `<Carousel /> ` component

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


### Required Peer dependencies
Use of the carousel components in a project requires that the following peer dependencies also be installed:

- `classnames`
- `prop-types`
- `react`
- `react-dom`
- `react-intersection-observer`
- `react-spring`
- `react-use-gesture`
- `react-use-measure`


## Hooks
The library includes several general-purpose custom hooks:

- `useEffectOnce`
- `useCallbackOnce`
- `useLocalStorage`
- `useOnClickOutside`


## Utilities
The library includes several general-purpose utility functions:

- `capitalize`
- `getFirst`
- `getMarkup`
- `isSSR`
- `take`
- `toCamelCase`
- `toSnakeCase`
