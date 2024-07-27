import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Copyright from "./Copyright";
import Reports from "./Reports";
import { useDispatch, useSelector } from "react-redux";
import { fetchReports } from "../store/thunks/fetchReports";
import Loading from "./Loading";

export default function ReportsPage() {
  const dispatch = useDispatch();

  const { isLoading, data, error } = useSelector((state) => {
    return state.reports;
  });

  React.useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Reports title="All Reports" data={data} />
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
}
