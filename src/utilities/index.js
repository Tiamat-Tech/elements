export const getAspectRatioClassName = (aspectRatio) => {
  let aspectRatioClassName = '';
  switch (aspectRatio) {
    case 'square':
      aspectRatioClassName = 'aspect-ratio-square';
      break;
    case 'wide':
      aspectRatioClassName = 'aspect-ratio-wide';
      break;
    case 'wider':
      aspectRatioClassName = 'aspect-ratio-wider';
      break;
    case 'widest':
      aspectRatioClassName = 'aspect-ratio-widest';
      break;
    case 'tall':
      aspectRatioClassName = 'aspect-ratio-tall';
      break;
    case 'taller':
      aspectRatioClassName = 'aspect-ratio-taller';
      break;
    case 'tallest':
      aspectRatioClassName = 'aspect-ratio-tallest';
      break;
    default:
      break;
  }

  return aspectRatioClassName;
};
