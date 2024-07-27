import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useMediaQuery } from "@mui/material";

// import { fetchDashboardData } from "../api/mockAPI";
// import Loading from "./Loading";
import SideBar from "./SideBar";
import AppBars from "./AppBars";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard({ children }) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const isSmallScreen = useMediaQuery(defaultTheme.breakpoints.down("sm"));

  // const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (isSmallScreen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isSmallScreen]);

  //for full page loading
  React.useEffect(() => {
    // const fetchData = async () => {
    //   await fetchDashboardData();
    //   setLoading(false);
    // };
    // fetchData();
  }, []);

  // if (loading) {
  //   return <Loading className="fixed inset-0" />;
  // }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBars open={open} toggleDrawer={toggleDrawer} />
        <SideBar open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
