import { Fab, Size, useScrollTrigger, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React from 'react';

/**
 *  Props definition
 */
export interface IScrollToTopProps {
  /**
   *  anchor
   *  @type string
   */
  anchor: string;

  /**
   *  threshold
   *  @type number
   */
  threshold: number;

  /**
   *  size
   *  @type string
   */
  size: Size;

  /**
   *  label
   *  @type string
   */
  label?: string;
}

/**
 *  Default props
 */
const defaultProps = {
  threshold: 200,
  label: 'Scroll back to top'
};

/**
 *  Styles
 */
const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

export const ScrollToTop: React.FC<IScrollToTopProps> & {
  defaultProps: Partial<IScrollToTopProps>;
} = ({ anchor, threshold, size, label }) => {
  /**
   *  Classes
   */
  const classes = useStyles();

  /**
   *  Scroll trigger
   */
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold
  });

  /**
   *  Click handler
   *  @description when component is clicked, scroll to top of page
   */
  const handleClick = () => {
    const anchorElement =
      anchor && document.querySelector(anchor)
        ? document.querySelector(anchor)
        : document.body;

    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  /**
   *  Render
   */
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <Fab color="secondary" size={size} aria-label={label}>
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
};

ScrollToTop.defaultProps = defaultProps;
