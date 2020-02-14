import { Box } from '@material-ui/core';
import classNames from 'classnames';
import React, { Fragment } from 'react';

/**
 *  Slideshow item props
 */
export interface ISlideshowItemProps {
  src: string;
  title?: string;
  subtitle?: string;
  overlay?: boolean;
  kenBurns?: boolean;
  content?: {
    position?: string;
    title?: string;
    subtitle?: string;
  };
}

/**
 *  Default props
 */
const defaultProps = {};

export const SlideshowItem: React.FC<ISlideshowItemProps> & {
  defaultProps: Partial<ISlideshowItemProps>;
} = ({ src, title, subtitle, overlay, kenBurns, content }) => {
  /**
   *  Render
   */
  return (
    <div
      className={`uk-position-cover${
        kenBurns
          ? ' uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left'
          : ''
      }`}
    >
      <img src={src} alt="" data-uk-cover={true} />
      {overlay || content ? (
        <div
          className={classNames(
            'uk-position-cover',
            overlay ? 'uk-overlay-primary' : ''
          )}
        >
          {content ? (
            <Box
              className={`uk-position-${content.position || 'center'}`}
              p={6}
            >
              <h1>{content.title}</h1>
              {content.subtitle ? <p>{subtitle}</p> : null}
            </Box>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

SlideshowItem.defaultProps = defaultProps;
