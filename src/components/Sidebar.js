import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
import { Collapse, Typography } from '@material-ui/core';
import routes from '../routes'
import { StarBorder } from '@material-ui/icons';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { IoMdBook } from 'react-icons/io';

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
    const [plexus, setPlexus] = useState(true)
    const [jabil, setJabil] = useState(true)
    const [ecomm, setEcomm] = useState(true)

    const togglePlexus = () => {
        setPlexus(!plexus)
    }

    const toggleJabil = () => {
        setJabil(!jabil)
    }

    const toggleEcomm = () => {
        setEcomm(!ecomm)
    }

    return (
        <div>
            <List>
                <ListItem onClick={togglePlexus}>
                    <ListItemText primary="Plexus" className={classes.text} />
                    {plexus ? <ExpandLess style={{ color: '#fff' }}/> : <ExpandMore style={{ color: '#fff' }}/>}
                </ListItem>
                <Collapse in={plexus} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem key={routes[0].name} component={Link} to={routes[0].path}>
                            <ListItemIcon>
                                {routes[0].icon}
                            </ListItemIcon>
                            <Typography className={classes.text}>{routes[0].name}</Typography>
                        </ListItem>
                        <ListItem key={routes[1].name} component={Link} to={routes[1].path}>
                            <ListItemIcon>
                                {routes[1].icon}
                            </ListItemIcon>
                            <Typography className={classes.text}>{routes[1].name}</Typography>
                        </ListItem>
                        <ListItem key={routes[2].name} component={Link} to={routes[2].path}>
                            <ListItemIcon>
                                {routes[2].icon}
                            </ListItemIcon>
                            <Typography className={classes.text}>{routes[2].name}</Typography>
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem onClick={toggleJabil}>
                    <ListItemText primary="Jabil" className={classes.text} />
                    {jabil ? <ExpandLess style={{ color: '#fff' }}/> : <ExpandMore style={{ color: '#fff' }}/>}
                </ListItem>
                <Collapse in={jabil} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem key={routes[3].name} component={Link} to={routes[3].path}>
                            <ListItemIcon>
                                {routes[3].icon}
                            </ListItemIcon>
                            <Typography className={classes.text}>{routes[3].name}</Typography>
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem onClick={toggleEcomm}>
                    <ListItemText primary="Ecommerce" className={classes.text} />
                    {ecomm ? <ExpandLess style={{ color: '#fff' }}/> : <ExpandMore style={{ color: '#fff' }}/>}
                </ListItem>
                <Collapse in={ecomm} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem key={routes[4].name} component={Link} to={routes[4].path}>
                            <ListItemIcon>
                                {routes[4].icon}
                            </ListItemIcon>
                            <Typography className={classes.text}>{routes[4].name}</Typography>
                        </ListItem>
                        <ListItem key={routes[5].name} component={Link} to={routes[5].path}>
                            <ListItemIcon>
                                {routes[5].icon}
                            </ListItemIcon>
                            <Typography className={classes.text}>{routes[5].name}</Typography>
                        </ListItem>
                        <ListItem key={routes[5].name} component={Link} to={routes[6].path}>
                            <ListItemIcon>
                                {routes[6].icon}
                            </ListItemIcon>
                            <Typography className={classes.text}>{routes[6].name}</Typography>
                        </ListItem>
                    </List>
                </Collapse>


            </List>
        </div>
    );

}

export default Sidebar;