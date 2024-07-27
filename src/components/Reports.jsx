import * as React from "react";
import Title from "./Title";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Reports({ title, data }) {
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <div style={{ width: "100%", flexGrow: 1, overflow: "hidden" }}>
        <BarChart series={data} height={350} />
      </div>
    </React.Fragment>
  );
}
