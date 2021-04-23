import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import DemoIncome from './__mocks__/DemoIncome';
import DemoExpenses from './__mocks__/DemoExpenses';
import GlobalContext from './contexts/GlobalContexts';

const App = () => {
  const routing = useRoutes(routes);
  const tools = {
    DemoIncome,
    DemoExpenses
  };

  return (
    <GlobalContext.Provider value={tools}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default App;
