import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const IncomeBySource = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  return (
    <>
      <h2>Income By Source</h2>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        />

        <Tooltip />
      </PieChart>
    </>
  );
};

export default IncomeBySource;
