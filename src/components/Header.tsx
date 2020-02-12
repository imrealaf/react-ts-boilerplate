import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  Toolbar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';

import navItems from '../data/navgiation.json';
import { useElevationOnScroll, useToggle } from '../hooks';
import { HideOnScroll } from './hoc';

/**
 *  Props definition
 */
export interface IHeaderProps {
  /**
   *  threshold
   *  @type number
   */
  threshold: number;

  /**
   *  hasFullHeight
   *  @type boolean
   */
  hasFullHeight: boolean;

  /**
   *  elevated
   *  @type boolean
   */
  elevated?: boolean;
}

/**
 *  Default props
 */
const defaultProps = {
  threshold: 50,
  hasFullHeight: false
};

/**
 *  Styles
 */
const useStyles = makeStyles(theme => ({
  appBar: (props: IHeaderProps) => ({
    background:
      !props.elevated && props.hasFullHeight
        ? 'transparent'
        : theme.palette.primary.main
  }),
  logo: {
    marginBottom: 0,
    color: theme.palette.text.primary,
    fontSize: '20px',
    display: 'inline-block'
  }
}));

export const Header: React.FC<IHeaderProps> & {
  defaultProps: Partial<IHeaderProps>;
} = props => {
  /**
   *  Elevation
   */
  const elevated = useElevationOnScroll(props.threshold);

  /**
   *  Classes
   */
  const classes = useStyles({ elevated, ...props });

  /**
   *  Sidenav control api
   */
  const nav = useToggle();

  return (
    <header>
      {/*
       * Nav bar
       */}
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar} elevation={elevated ? 4 : 0}>
          <Toolbar>
            <div className={classes.logo}>App</div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/*
       * Nav drawer
       */}
      <Drawer anchor="right" open={nav.active}>
        <Box width={300}>
          <List>
            {navItems.map((item, i) => (
              <ListItem key={i}>
                <Link to={item.path}>{item.title}</Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </header>
  );
};

Header.defaultProps = defaultProps;
