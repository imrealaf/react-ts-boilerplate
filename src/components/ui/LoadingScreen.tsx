import { Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

export interface ILoadingScreenProps {
  active: boolean;
  color: string;
}

const defaultProps = {
  color: 'primary'
};

/**
 *  Styles
 */
const useStyles = makeStyles(theme => ({
  root: (props: ILoadingScreenProps) => {
    const palette: any = theme.palette;
    return {
      background: palette[props.color].main,
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      zIndex: 3000
    };
  }
}));

export const LoadingScreen: React.FC<ILoadingScreenProps> & {
  defaultProps: Partial<ILoadingScreenProps>;
} = props => {
  const { active, children } = props;
  const [show, setShow] = useState(active);

  /**
   *  Classes
   */
  const classes = useStyles(props);

  const onAnimationComplete = () => {
    setShow(false);
  };

  return show ? (
    <Fade
      appear={false}
      enter={false}
      in={active}
      onExited={onAnimationComplete}
    >
      <div className={classes.root}>{children}</div>
    </Fade>
  ) : null;
};

LoadingScreen.defaultProps = defaultProps;
