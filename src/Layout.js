import * as React from 'react';
import { forwardRef } from 'react';
import { Layout, AppBar, UserMenu, useLocale, MenuItemLink, useSetLocale } from 'react-admin';
import { MenuItem, ListItemIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Language from '@material-ui/icons/Language';
import SettingsIcon from "@material-ui/icons/Settings";
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
    menuItem: {
        color: theme.palette.text.secondary,
    },
    icon: { minWidth: theme.spacing(5) },
}));

const SwitchLanguage = forwardRef((props, ref) => {
    const locale = useLocale();
    const setLocale = useSetLocale();
    const classes = useStyles();
    return (
        <MenuItem
            ref={ref}
            className={classes.menuItem}
            onClick={() => {
                setLocale(locale === 'en' ? 'fr' : 'en');
                props.onClick();
            }}
        >
            <ListItemIcon className={classes.icon}>
                <Language />
            </ListItemIcon>
            Switch Language
        </MenuItem>
    );
});

const UCPSettings = forwardRef((props, ref) => {
    const classes = useStyles();
    return (
        <MenuItemLink
            className={classes.menuItem}
            to="/Profile"
            primaryText="UCP Settings"
            leftIcon={<SettingsIcon />}
        >
        <ListItemIcon className={classes.icon}>
            <SettingsIcon />
        </ListItemIcon>
        UCP Settings
    </MenuItemLink>
    );
});

const ProfileSettings = forwardRef((props, ref) => {
    const classes = useStyles();
    return (
        <MenuItemLink
            className={classes.menuItem}
            to="/Profile"
            primaryText="Profile"
            leftIcon={<PersonIcon />}
        >
        <ListItemIcon className={classes.icon}>
            <PersonIcon />
        </ListItemIcon>
        Profile
    </MenuItemLink>
    );
});


const MyUserMenu = props => (
    <UserMenu {...props}>
        <SwitchLanguage />
        <UCPSettings />
        <ProfileSettings />
        <hr></hr>
    </UserMenu>
);

const MyAppBar = props => <AppBar {...props} userMenu={<MyUserMenu />} />;

export default props => <Layout {...props} appBar={MyAppBar} />;