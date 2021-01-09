import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent;

type ListenerEvent =
  | (MouseEvent & {
      target: Element;
    })
  | (TouchEvent & {
      target: Element;
    });

export const useOnClickOutside = (
  node: RefObject<HTMLElement>,
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    const listener = (event: ListenerEvent) => {
      if (!node.current || node.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [node, handler]);
};
