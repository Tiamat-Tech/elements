type AspectRatio = 'square' | 'wide' | 'wider' | 'widest' | 'tall' | 'taller' | 'tallest';

export const getAspectRatioClassName = (aspectRatio: AspectRatio) => {
  switch (aspectRatio) {
    case 'square':
      return 'carousel--aspect-ratio-square';
    case 'wide':
      return 'carousel--aspect-ratio-wide';
    case 'wider':
      return 'carousel--aspect-ratio-wider';
    case 'widest':
      return 'carousel--aspect-ratio-widest';
    case 'tall':
      return 'carousel--aspect-ratio-tall';
    case 'taller':
      return 'carousel--aspect-ratio-taller';
    case 'tallest':
      return 'carousel--aspect-ratio-tallest';
  }
};
