import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const MonthlyIncomeExpenses = () => {
  const data = [
    {
      name: "January",
      Income: 4000,
      Expenses: 2400,
      amt: 2400,
    },
    {
      name: "Febuary",
      Income: 3000,
      Expenses: 1398,
      amt: 2210,
    },
    {
      name: "March",
      Income: 2000,
      Expenses: 9800,
      amt: 2290,
    },
    {
      name: "April",
      Income: 2780,
      Expenses: 3908,
      amt: 2000,
    },
    {
      name: "May",
      Income: 6780,
      Expenses: 4908,
      amt: 2010,
    },
    {
      name: "June",
      Income: 2580,
      Expenses: 1908,
      amt: 2400,
    },
  ];
  return (
    <>
      <h2>Monthly Income & Expenses 2021</h2>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Expenses" fill="#8884d8" />
        <Bar dataKey="Income" fill="#82ca9d" />
      </BarChart>
    </>
  );
};
export default MonthlyIncomeExpenses;
