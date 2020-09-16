import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import routes from '../routes'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    text: {
        fontFamily: 'AirbnbCereal-Book',
        fontSize: 15,
        color: '#fff'
    }
}));


const Sidebar = (props) => {

    const classes = useStyles();

    return (
        <div>
            <img alt="Sample Format" src={require('../assets/logo.jpg')} width={"100%"} />
            {/* <div className={classes.toolbar} /> */}
            <List>
                {routes.map((route, index) => (
                    <ListItem key={route.name} component={Link} to={route.path}>
                        <ListItemIcon>
                            {route.icon}
                        </ListItemIcon>
                        <Typography className={classes.text} style={{}}>{route.name}</Typography>
                    </ListItem>
                ))}
            </List>
        </div>
    );

}

export default Sidebar;