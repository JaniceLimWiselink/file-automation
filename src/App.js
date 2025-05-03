import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from './components/Sidebar.js';
import Drawer from '@material-ui/core/Drawer';

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Route, Switch } from 'react-router-dom';
import Nexus from './views/Nexus';
import Compare from './views/Compare.js';
import Compile from './views/Compile.js';
import PlexusForecast from './views/PlexusForecast.js';
import JabilForecast from './views/JabilForecast.js';
import PlexusEmail from './views/PlexusEmail.js';
import Rescheduler from './views/Rescheduler.js';
import QuotationCompare from './views/QuotationCompare.js';
import QuotationCompile from './views/QuotationCompile.js';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // fontFamily:'AirbnbCereal-Medium'
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
    backgroundColor: '#2e4574',
    border: 'none'
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
          <Route exact path="/" render={() => <div>WISELINK</div>} />
          <Route path="/plexus/jit" render={() => <Nexus />} />
          <Route path="/plexus/forecast" render={() => <PlexusForecast />} />
          <Route path="/plexus/email" render={() => <PlexusEmail />} />
          <Route path="/jabil/forecast" render={() => <JabilForecast />} />
          <Route path="/ecommerce/compare" render={() => <Compare />} />
          <Route path="/ecommerce/compile" render={() => <Compile />} />
          <Route path="/admin/reschedule" render={() => <Rescheduler />} />
          <Route path="/admin/transfer-quotation" render={() => <QuotationCompare />} />
          <Route path="/admin/input-supplier-price" render={() => <QuotationCompile />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
