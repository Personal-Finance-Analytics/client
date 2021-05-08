import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import Demo from 'src/pages/Demo';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';
import DailyComposedChart from './components/dashboard/composed/DailyComposedChart';
import MonthlyComposedChart from './components/dashboard/composed/MonthlyComposedChart';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'demo', element: <Demo /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> },
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/demo" /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: 'test1', element: <MonthlyComposedChart /> },
      { path: 'test2', element: <DailyComposedChart /> }
    ]
  }
];

export default routes;
