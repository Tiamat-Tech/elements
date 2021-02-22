export const getAnimationConfig = (spring: any, defaultSprings: any, clamp: boolean) => {
  if (typeof spring === 'string') {
    return {
      ...defaultSprings[spring],
      clamp: clamp,
    };
  } else {
    return {
      ...spring,
      clamp: clamp,
    };
  }
};
