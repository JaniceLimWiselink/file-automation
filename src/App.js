import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from './components/Sidebar.js';
import Drawer from '@material-ui/core/Drawer';

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Route, Switch } from 'react-router-dom';
import Nexus from './views/Nexus';
import Compare from './views/Compare.js';
import Compile from './views/Compile.js';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontFamily:'AirbnbCereal-Medium'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#252e3e'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="navigation-tabs">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          <Sidebar />
        </Drawer>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          {/* <Route exact path="/file-automation" render={() => <div>WISELINK</div>} /> */}
          <Route path="/file-automation/plexus" render={() => <Nexus />} />
          <Route path="/file-automation/compare" render={() => <Compare />} />
          <Route path="/file-automation/compile" render={() => <Compile />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
