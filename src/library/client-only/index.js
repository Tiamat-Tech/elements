import { useState } from 'react';
import PropTypes from 'prop-types';

import { useEffectOnce } from '../hooks/use-effect-once';

export const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffectOnce(() => {
    setHasMounted(true);
  });

  if (!hasMounted) return null;

  return children;
};

ClientOnly.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
