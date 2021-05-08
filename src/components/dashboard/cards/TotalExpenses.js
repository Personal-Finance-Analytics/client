import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import { useContext } from 'react';
import GlobalContext from '../../../contexts/GlobalContext';
import useTotalExpenses from '../../../hooks/useTotalExpenses';

const TotalExpenses = (props) => {
  const { DemoExpenses } = useContext(GlobalContext);
  const totalExpenses = useTotalExpenses(DemoExpenses);
  return (
    <Card {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Total Expenses
            </Typography>
            <Typography color="textPrimary" variant="h3">
              $
              {' '}
              {parseFloat(totalExpenses).toFixed(2)}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{ backgroundColor: green[600], height: 56, width: 56 }}
            >
              <CreditCardOutlinedIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{ alignItems: 'center', display: 'flex', pt: 2 }}
        >
          <ArrowUpwardIcon sx={{ color: green[900] }} />
          <Typography
            variant="body2"
            sx={{ color: green[900], mr: 1 }}
          >
            16%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default TotalExpenses;
