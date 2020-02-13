import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Toolbar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { NavLink } from 'react-router-dom';

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
  appBarNav: {
    marginLeft: 'auto'
  },
  appBarNavLink: {
    color: theme.palette.text.primary
  },
  logo: {
    marginBottom: 0,
    color: theme.palette.text.primary,
    fontSize: '20px',
    display: 'inline-block'
  },
  toggle: {
    position: 'absolute',
    right: theme.spacing(2)
  },
  drawer: {
    width: 300
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
            <List className={classes.appBarNav}>
              <ListItem
                className={classes.appBarNavLink}
                component={NavLink}
                to="/"
              >
                <ListItemText primary="test" />
              </ListItem>
            </List>
            <Hidden mdUp={true}>
              <IconButton
                className={classes.toggle}
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={nav.toggle}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/*
       * Nav drawer
       */}
      <SwipeableDrawer
        anchor="right"
        open={nav.active}
        onOpen={nav.show}
        onClose={nav.hide}
        transitionDuration={{ enter: 400, exit: 200 }}
      >
        <Box width={300}>
          <List>
            {navItems.map((item, i) => (
              <ListItem key={i} button={true} component={NavLink} to="/page-2">
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </header>
  );
};

Header.defaultProps = defaultProps;
