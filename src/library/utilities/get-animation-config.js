export const getAnimationConfig = (spring, defaultSprings) => {
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
