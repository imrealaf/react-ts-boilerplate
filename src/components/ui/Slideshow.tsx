import React, { Fragment } from 'react';

/**
 *  Animation type
 */
type Animation = 'slide' | 'fade' | 'scale' | 'pull' | 'push';

/**
 *  Slideshow item props
 */
export interface ISlideshowItem {
  src: string;
  title?: string;
  overlay?: boolean;
  kenBurns?: boolean;
}

/**
 *  Slideshow props
 */
export interface ISlideshowProps {
  /**
   *  items
   *  @description array of slideshow items to dispay
   */
  items: ISlideshowItem[];

  /**
   *  items
   *  @description slideshow animation mode (slide, fade, scale, pull or push)
   */
  animation: Animation;

  /**
   *  autoplay
   *  @description to autoplay slideshow or not
   */
  autoplay: boolean;

  /**
   *  autoplayInterval
   *  @description the delay between switching slides in autoplay mode
   */
  autoplayInterval: number;

  /**
   *  draggable
   *  @description enable pointer dragging
   */
  draggable: boolean;

  /**
   *  pauseOnHover
   *  @description pause autoplay mode on hover
   */
  pauseOnHover: boolean;

  /**
   *  nav
   *  @description show the nav controls
   */
  nav: boolean;

  /**
   *  fillHeight
   *  @description force the slides to fill the viewport height
   */
  fillHeight: boolean;

  /**
   *  index
   *  @description slideshow item to show first. 0 based index
   */
  index: number;

  /**
   *  infinite
   *  @description enable continuous scrolling
   */
  infinite: boolean;
}

/**
 *  Default props
 */
const defaultProps = {
  animation: 'push' as Animation,
  autoplay: true,
  autoplayInterval: 5000,
  draggable: true,
  pauseOnHover: true,
  nav: true,
  fillHeight: false,
  index: 0,
  infinite: true
};

export const Slideshow: React.FC<ISlideshowProps> & {
  defaultProps: Partial<ISlideshowProps>;
} = ({
  items,
  animation,
  autoplay,
  autoplayInterval,
  draggable,
  pauseOnHover,
  nav,
  fillHeight,
  index,
  infinite
}) => {
  /**
   *  Settings
   */
  const settings = `
    animation: ${animation};
    autoplay: ${autoplay};
    autoplay-interval: ${autoplayInterval};
    draggable: ${draggable};
    pause-on-hover: ${pauseOnHover};
    index: ${index};
    finite: ${!infinite};
  `.replace(/\s+/g, '');

  /**
   *  Special settings
   */
  const special: any = {};
  if (fillHeight) special['data-uk-height-viewport'] = 'offset-top: true;';

  /**
   *  Styles
   */
  const navBtnStyle = {
    background: 'none',
    border: 'none'
  };

  /**
   *  Render
   */
  return items ? (
    <div
      className="uk-position-relative"
      tabIndex={-1}
      data-uk-slideshow={settings}
    >
      <ul className="uk-slideshow-items" {...special}>
        {items.map((item, i) => (
          <li key={i}>
            <div
              className={`uk-position-cover${
                item.kenBurns
                  ? ' uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left'
                  : ''
              }`}
            >
              <img src={item.src} alt="" data-uk-cover={true} />
              {item.overlay ? (
                <div className="uk-overlay-primary uk-position-cover" />
              ) : null}
            </div>
            >
          </li>
        ))}
      </ul>

      {nav ? (
        <Fragment>
          <button
            style={navBtnStyle}
            className="uk-position-center-left uk-position-small uk-hidden-hover"
            data-uk-slidenav-previous={true}
            data-uk-slideshow-item="previous"
          />
          <button
            style={navBtnStyle}
            className="uk-position-center-right uk-position-small uk-hidden-hover"
            data-uk-slidenav-next={true}
            data-uk-slideshow-item="next"
          />
        </Fragment>
      ) : null}
    </div>
  ) : null;
};

Slideshow.defaultProps = defaultProps;
