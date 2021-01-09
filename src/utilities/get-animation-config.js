export const getAnimationConfig = (spring: any, defaultSprings: any) => {
  if (typeof spring === 'string') {
    return {
      ...defaultSprings[spring],
      clamp: true,
    };
  } else {
    return {
      ...spring,
      clamp: true,
    };
  }
};
