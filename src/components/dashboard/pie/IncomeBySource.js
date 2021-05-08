import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import GlobalContext from '../../../contexts/GlobalContext';
import useIncomeBySource from '../../../hooks/useIncomeBySource';
import useRandomColor from '../../../hooks/useRandomColor';

const IncomeBySource = () => {
  const { DemoIncome, isMobile } = useContext(GlobalContext);
  const sourceData = useIncomeBySource(DemoIncome);

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
      display: true,
      position: isMobile ? 'bottom' : 'left'
    }
  };
  return (
    <>
      <Card>
        <CardHeader title="Income By Source" />
        <Divider />
        <CardContent>
          <Box
            sx={{
              height: 400,
              position: 'relative'
            }}
          >
            <Pie
              data={data}
              options={options}
            />
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
export default IncomeBySource;
