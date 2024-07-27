import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Orders from "./Orders";
import Copyright from "./Copyright";
import { fetchOrdersData } from "../api/mockAPI";
import Loading from "./Loading";

export default function OrdersPage() {
  const [loadingOrders, setLoadingOrders] = React.useState(true);
  const [ordersData, setOrdersData] = React.useState(null);

  //for full page loading
  React.useEffect(() => {
    const fetchData = async () => {
      const ordersData = await fetchOrdersData();
      setOrdersData(ordersData);
      setLoadingOrders(false);
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* All Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            {loadingOrders ? (
              <Loading classNameSpinner="w-24 h-24" />
            ) : (
              <Orders title="All Orders" rows={ordersData} size="large" />
            )}
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
}
