import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import GlobalContext from '../../../contexts/GlobalContext';
import useExpensesBySubType from '../../../hooks/useExpensesBySubType';
import useRandomColor from '../../../hooks/useRandomColor';

const ExpensesBySubType = () => {
  const { DemoExpenses, isMobile } = useContext(GlobalContext);
  const sourceData = useExpensesBySubType(DemoExpenses);

  // Now, create random colors based on sourceData generated
  const { labels, datasets } = sourceData;
  const backgroundColor = labels.map(() => useRandomColor());

  // Need a seperate variable to store datasets.
  // If you simply use datasets[0].something in "const data" below, datasets won't be defined
  const sample = datasets;

  // Create a new data course to populate the chart
  const data = {
    labels,
    datasets: [
      {
        label: sample[0].label,
        data: sample[0].data,
        backgroundColor,
        borderWidth: sample[0].borderWidth,
        height: sample[0].height
      }
    ]
  };
  const options = {
    legend: {
      display: isMobile ? false : 'left',
      position: 'right'
    }
  };
  return (
    <>
      <Card>
        <CardHeader title="Expenses By Sub-Type" />
        <Divider />
        <CardContent>
          <Box
            sx={{
              height: 900,
              position: 'relative'
            }}
          >
            <Doughnut data={data} options={options} />
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
export default ExpensesBySubType;
