import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Box,
  Typography
} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { indigo, green } from '@material-ui/core/colors';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const AverageMonthlyIncome = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            Average Monthly Income
          </Typography>
          <Typography color="textPrimary" variant="h3">
            $ 12,000
          </Typography>
        </Grid>
        <Grid item>
          <Avatar sx={{ backgroundColor: indigo[600], height: 56, width: 56 }}>
            <AttachMoneyIcon />
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
          5%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default AverageMonthlyIncome;
