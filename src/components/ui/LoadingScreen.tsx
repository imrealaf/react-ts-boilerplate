import { Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

export interface ILoadingScreenProps {
  active: boolean;
  color: 'primary' | 'secondary';
}

/**
 *  Styles
 */
const useStyles = makeStyles(theme => ({
  root: props => ({
    background: theme.palette.primary.main,
    position: 'fixed',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 3000
  })
}));

export const LoadingScreen: React.FC<ILoadingScreenProps> = ({
  active,
  children
}) => {
  const [show, setShow] = useState(active);

  /**
   *  Classes
   */
  const classes = useStyles();

  const onAnimationComplete = () => {
    setShow(false);
  };

  return show ? (
    <Fade in={active} onExited={onAnimationComplete}>
      <div className={classes.root}>{children}</div>
    </Fade>
  ) : null;
};

LoadingScreen.defaultProps = {};
