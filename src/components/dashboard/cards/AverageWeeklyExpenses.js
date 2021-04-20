import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';

const AverageWeeklyExpenses = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            Average Weekly Expenses
          </Typography>
          <Typography color="textPrimary" variant="h3">
            $ 210
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{ backgroundColor: green[600], height: 56, width: 56 }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{ alignItems: 'center', display: 'flex', pt: 2 }}
      >
        <ArrowDownwardIcon sx={{ color: green[900] }} />
        <Typography
          variant="body2"
          sx={{ color: green[900], mr: 1 }}
        >
          10%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default AverageWeeklyExpenses;
