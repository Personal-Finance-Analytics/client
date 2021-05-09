import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const DailyComposedChart = () => {
  const data = [
    {
      name: 'Page A',
      uv: 548,
      pv: 300,
      amt: 300,
    },
    {
      name: 'Page B',
      uv: 445,
      pv: 800,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 87,
      pv: 379,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 220,
      pv: 298,
      amt: 87,
    },
    {
      name: 'Page E',
      uv: 172,
      pv: 583,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 190,
      pv: 372,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 269,
      pv: 379,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 50,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={650} label="Daily Average Income" stroke="red" />
        <ReferenceLine y={331} label="Daily Average Expenses" stroke="Blue" />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default DailyComposedChart;
// Adpoted from LineChartWithReferenceLines (Recharts.js): https://recharts.org/en-US/examples/LineChartWithReferenceLines
