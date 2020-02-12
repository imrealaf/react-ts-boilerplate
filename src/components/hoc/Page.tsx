import classNames from 'classnames';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import config from '../../config';

/**
 *  Props definition
 */
export interface IPageProps {
  classes: string[];
  title?: string;
  description?: string;
}

/**
 *  Default props
 */
const defaultProps = {
  classes: []
};

export const Page: React.FC<IPageProps> & {
  defaultProps: Partial<IPageProps>;
} = ({ classes, title, description, children }) => {
  return (
    <Fragment>
      <Helmet
        titleTemplate={`%s ${config.meta.titleSeperator} ${config.appName}`}
        defaultTitle={config.appName}
      >
        <title>{title ? title : ''}</title>
        {description ? <meta name="description" content={description} /> : null}
        {classes.length ? <body className={classNames(...classes)} /> : null}
      </Helmet>
      {children}
    </Fragment>
  );
};

Page.defaultProps = defaultProps;
