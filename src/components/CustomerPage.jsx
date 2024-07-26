import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Copyright from "./Copyright";
import { fetchCustomerData } from "../api/mockAPI";
import Loading from "./Loading";
import SideBar from "./SideBar";
import AppBars from "./AppBars";
import Customer from "./Customer";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function CustomerPage() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [loadingCustomer, setLoadingCustomer] = React.useState(true);
  const [customerData, setCustomerData] = React.useState(null);

  //for full page loading
  React.useEffect(() => {
    const fetchData = async () => {
      const customerData = await fetchCustomerData();
      setCustomerData(customerData);
      setLoadingCustomer(false);
    };

    fetchData();
  }, []);

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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* All Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  {loadingCustomer ? (
                    <Loading classNameSpinner="w-24 h-24" />
                  ) : (
                    <Customer
                      title="All Customer"
                      rows={customerData}
                      size="large"
                    />
                  )}
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
