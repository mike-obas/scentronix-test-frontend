import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';

interface Props {
  children: React.ReactElement
  window: Window
}

function ElevationScroll(props: Props) {
  const theme = useTheme()
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 1 : 0,
    style: { background: `${theme.palette.secondary.light}` }
  });
}

export default ElevationScroll