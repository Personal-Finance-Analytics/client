import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
// import Budget from 'src/components/dashboard//Budget';

import LatestOrders from 'src/components/dashboard//LatestOrders';
import LatestProducts from 'src/components/dashboard//LatestProducts';
import Sales from 'src/components/dashboard//Sales';
// import TasksProgress from 'src/components/dashboard//TasksProgress';
// import TotalCustomers from 'src/components/dashboard//TotalCustomers';
// import TotalProfit from 'src/components/dashboard//TotalProfit';
import TrafficByDevice from 'src/components/dashboard//TrafficByDevice';

import TotalIncome from '../components/dashboard/cards/TotalIncome';
import TotalExpenses from '../components/dashboard/cards/TotalExpenses';
import AverageDailyIncome from '../components/dashboard/cards/AverageDailyIncome';
import AverageDailyExpenses from '../components/dashboard/cards/AverageDailyExpenses';
import AverageWeeklyIncome from '../components/dashboard/cards/AverageWeeklyIncome';
import AverageWeeklyExpenses from '../components/dashboard/cards/AverageWeeklyExpenses';
// import AverageMonthlyIncome from '../components/dashboard/cards/AverageMonthlyIncome';
// import AverageMonthlyExpenses from '../components/dashboard/cards/AverageMonthlyExpenses';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Demo</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalIncome />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalExpenses />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <AverageDailyIncome />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <AverageDailyExpenses sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <AverageWeeklyIncome />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <AverageWeeklyExpenses sx={{ height: '100%' }} />
          </Grid>

          {/* <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <AverageMonthlyIncome />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <AverageMonthlyExpenses sx={{ height: '100%' }} />
          </Grid> */}
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
export default Dashboard;
