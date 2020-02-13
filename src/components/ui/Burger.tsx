import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

export interface IBurgerProps {
  active: boolean;
  onClick?(): void;
}

/**
 *  Styles
 */
const config = {
  layerWidth: 30,
  layerSpacing: 7,
  layerHeight: 1
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    cursor: 'pointer',
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
    transform: 'scale(1)',

    transitionProperty: 'opacity, filter',
    transitionDuration: '0.15s',
    transitionTimingFunction: 'linear',

    textTransform: 'none',
    backgroundColor: 'transparent',
    border: 0,
    margin: 0,
    overflow: 'visible'
  },
  box: {
    width: `${config.layerWidth}px`,
    height: `${config.layerWidth * 3 + config.layerSpacing * 2}px`,
    display: 'inline-block',
    position: 'relative'
  },
  bar: (props: IBurgerProps) => ({
    backgroundColor: theme.palette.secondary.main,
    width: config.layerWidth,
    height: config.layerHeight,
    position: 'absolute',
    transitionProperty: 'transform',
    transitionDuration: '0.22s',
    transitionDelay: props.active ? '0.12s' : '',
    transitionTimingFunction: props.active
      ? 'cubic-bezier(0.215, 0.61, 0.355, 1)'
      : 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    display: 'block',
    transform: props.active ? 'rotate(225deg)' : ''
  }),
  bar1: (props: IBurgerProps) => ({
    top: props.active
      ? '0'
      : `${config.layerSpacing + config.layerHeight * -1}px`,
    width: `${config.layerWidth - (props.active ? 0 : 5)}px`,
    transition: props.active
      ? 'top 0.1s ease-out, opacity 0.1s 0.12s ease-out'
      : 'top 0.1s 0.25s ease-in, opacity 0.1s ease-in',
    opacity: props.active ? 0 : 1
  }),
  bar2: (props: IBurgerProps) => ({
    width: `${config.layerWidth - (props.active ? 0 : 10)}px`
  }),
  bar3: (props: IBurgerProps) => ({
    bottom: props.active
      ? '0'
      : `${config.layerSpacing + config.layerHeight * -1}px`,
    transform: props.active ? 'rotate(-90deg)' : '',
    transition: props.active
      ? 'bottom 0.1s ease-out,transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)'
      : 'bottom 0.1s 0.25s ease-in,transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  })
}));

export const Burger: React.FC<IBurgerProps> = ({ active, onClick }) => {
  /**
   *  Classes
   */
  const classes = useStyles({ active });

  return (
    <button className={classes.root} onClick={onClick}>
      <div className={classes.box}>
        <span className={classes.bar + classes.bar1} />
        <span className={classes.bar + classes.bar2} />
        <span className={classes.bar + classes.bar3} />
      </div>
    </button>
  );
};
