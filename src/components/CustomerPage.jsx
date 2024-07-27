import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Copyright from "./Copyright";
import { fetchCustomerData } from "../api/mockAPI";
import Loading from "./Loading";
import Customer from "./Customer";

export default function CustomerPage() {
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
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* All Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            {loadingCustomer ? (
              <Loading classNameSpinner="w-24 h-24" />
            ) : (
              <Customer title="All Customer" rows={customerData} size="large" />
            )}
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
}
