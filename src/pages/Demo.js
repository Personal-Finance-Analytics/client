import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import TotalIncome from '../components/dashboard/cards/TotalIncome';
import TotalExpenses from '../components/dashboard/cards/TotalExpenses';
import AverageDailyIncome from '../components/dashboard/cards/AverageDailyIncome';
import AverageDailyExpenses from '../components/dashboard/cards/AverageDailyExpenses';
import AverageWeeklyIncome from '../components/dashboard/cards/AverageWeeklyIncome';
import AverageWeeklyExpenses from '../components/dashboard/cards/AverageWeeklyExpenses';
import AverageMonthlyIncome from '../components/dashboard/cards/AverageMonthlyIncome';
import AverageMonthlyExpenses from '../components/dashboard/cards/AverageMonthlyExpenses';
import IncomeBySource from '../components/dashboard/pie/IncomeBySource';
import IncomeByType from '../components/dashboard/pie/IncomeByType';
import IncomeByPaymentMethod from '../components/dashboard/pie/IncomeByPaymentMethod';
import ExpensesByType from '../components/dashboard/doughnuts/ExpensesByType';
import ExpensesBySubType from '../components/dashboard/doughnuts/ExpensesBySubType';
import ExpensesByPaymentType from '../components/dashboard/doughnuts/ExpensesByPaymentType';
import DailyComposedChart from '../components/dashboard/composed/DailyComposedChart';
import MonthlyComposedChart from '../components/dashboard/composed/MonthlyComposedChart';

const Demo = () => {
  console.log('Demo.js');
  return (
    <>
      <Helmet>
        <title>Demo | Personal Finance Analytics</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            {/* Cards */}
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalIncome />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalExpenses />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <AverageDailyIncome />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <AverageDailyExpenses sx={{ height: '100%' }} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <AverageWeeklyIncome />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <AverageWeeklyExpenses sx={{ height: '100%' }} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <AverageMonthlyIncome />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <AverageMonthlyExpenses sx={{ height: '100%' }} />
            </Grid>

            {/* Income charts */}
            <Grid item lg={6} md={6} xl={4} xs={12}>
              <IncomeByPaymentMethod sx={{ height: '100%' }} />
            </Grid>
            <Grid item lg={6} md={6} xl={4} xs={12}>
              <IncomeByType />
            </Grid>
            <Grid item lg={6} md={12} xl={4} xs={12}>
              <IncomeBySource />
            </Grid>

            {/* Expenses charts */}
            <Grid item lg={6} md={6} xl={6} xs={12}>
              <ExpensesByType sx={{ height: '100%' }} />
            </Grid>
            <Grid item lg={6} md={6} xl={6} xs={12}>
              <ExpensesByPaymentType />
            </Grid>
            <Grid item lg={12} md={12} xl={12} xs={12}>
              <ExpensesBySubType />
            </Grid>
            {/* composed charts */}
            <Grid item lg={12} md={12} xl={12} xs={12}>
              <DailyComposedChart />
            </Grid>
            <Grid item lg={12} md={12} xl={12} xs={12}>
              <MonthlyComposedChart />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Demo;
