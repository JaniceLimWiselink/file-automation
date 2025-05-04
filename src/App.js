// React and hooks
import React, { useState } from 'react';

// React Router
import { Route, Routes } from 'react-router-dom';

// Material-UI Core
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import { Box, createTheme, Divider, IconButton, styled, Tooltip } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

// Material-UI Icons
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// Views
import Nexus from './views/Nexus';
import Compare from './views/Compare.js';
import Compile from './views/Compile.js';
import PlexusForecast from './views/PlexusForecast.js';
import JabilForecast from './views/JabilForecast.js';
import PlexusEmail from './views/PlexusEmail.js';
import Rescheduler from './views/Rescheduler.js';
import QuotationCompare from './views/QuotationCompare.js';
import QuotationCompile from './views/QuotationCompile.js';

// Components
import Sidebar from './components/Sidebar.js';

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    // flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    width: "100%",
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: 0,
    }),
    // Responsive adjustments
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1), // Reduced padding on mobile
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        width: "100%", // Override to prevent width issues with open drawer on mobile
      }),
    },
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          // Default props to be applied to all TextFields
          fontSize: "1em",
          fontFamily: "AirbnbCereal-Book",
          transitionDuration: "0.6s",
          borderRadius: "5px",
          backgroundColor: "#fff",
          "&:hover fieldset": {
            borderColor: "#212b36",
            transitionDuration: "0.6s",
          },
          "&:focus": {
            borderColor: "#212b36",
          },
          variant: "outlined",
          InputProps: {
            // For example, apply a style to all input elements
            style: {
              color: "#212b36",
              fontFamily: "AirbnbCereal-Book",
              fontSize: "1em",
            },
          },
          InputLabelProps: {
            // For example, apply a style to all input elements
            style: {
              color: "#212b36",
              fontFamily: "AirbnbCereal-Book",
              fontSize: "1em",
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#212b36",
          fontFamily: "AirbnbCereal-Book",
          fontSize: "1em",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          color: "#212b36",
          fontFamily: "AirbnbCereal-Medium",
          fontSize: "0.95em",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#212b36",
          fontFamily: "AirbnbCereal-Medium",
          fontSize: "0.95em",
          padding: "12px 10px",
          whiteSpace: "nowrap",
        },
      },
    },
  },
});


function App() {
  const [open, setOpen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
        <CssBaseline />
        <Drawer
          sx={{
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#f3f6f8",
            },
            width: drawerWidth,
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <Sidebar />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Routes>
            <Route exact path="/" render={() => <div>WISELINK</div>} />
            <Route path="/plexus/jit" element={<Nexus />} />
            <Route path="/plexus/forecast" element={<PlexusForecast />} />
            <Route path="/plexus/email" element={<PlexusEmail />} />
            <Route path="/jabil/forecast" element={<JabilForecast />} />
            <Route path="/ecommerce/online-stock-pricing" element={<Compare />} />
            <Route path="/ecommerce/compile" element={<Compile />} />
            <Route path="/admin/reschedule" element={<Rescheduler />} />
            <Route path="/admin/transfer-quotation" element={<QuotationCompare />} />
            <Route path="/admin/input-supplier-price" element={<QuotationCompile />} />
          </Routes>
        </Main>
      </Box>
    </ThemeProvider>
  );
}

export default App;
