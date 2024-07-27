import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "./Chart";
import Deposits from "./Deposit";
import Orders from "./Orders";
import Copyright from "./Copyright";
import Loading from "./Loading";
import {
  fetchOrdersData,
  fetchDepositsData,
  fetchChartData,
} from "../api/mockAPI";

export default function DashboardPage() {
  const [loadingOrders, setLoadingOrders] = React.useState(true);
  const [recentOrdersData, setRecentOrdersData] = React.useState(null);

  const [loadingDeposits, setLoadingDeposits] = React.useState(true);
  const [depositsData, setDepositsData] = React.useState(null);

  const [loadingChart, setLoadingChart] = React.useState(true);
  const [chartData, setChartData] = React.useState(null);

  React.useEffect(() => {
    const fetchAllData = async () => {
      const ordersData = await fetchOrdersData();
      const sortedOrdersData = ordersData
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);

      setRecentOrdersData(sortedOrdersData);
      setLoadingOrders(false);

      const depositsData = await fetchDepositsData();
      setDepositsData(depositsData);
      setLoadingDeposits(false);

      const chartData = await fetchChartData();
      setChartData(chartData);
      setLoadingChart(false);
    };
    fetchAllData();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            {loadingChart ? (
              <Loading classNameSpinner="w-24 h-24" />
            ) : (
              <Chart data={chartData} />
            )}
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            {loadingDeposits ? (
              <Loading classNameSpinner="w-24 h-24" />
            ) : (
              <Deposits data={depositsData} />
            )}
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            {loadingOrders ? (
              <Loading classNameSpinner="w-24 h-24" />
            ) : (
              <Orders
                title="Recent Orders"
                rows={recentOrdersData}
                size="small"
              />
            )}
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
}
