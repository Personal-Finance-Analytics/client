import { BrowserRouter as Router, Route } from "react-router-dom";
import SendResetPasswordLinkPage from "./pages/SendResetPasswordLinkPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import LoginPage from "./pages/LoginPage";
import DemoHomePage from "./pages/DemoHomePage";
import DashboardMingyang from "./pages/DashboardMingyang";
import DashboardSeongjune from './pages/DashboardSeongjune';
import DashboardHarpreet from './pages/DashboardHarpreet';

const App = () => {
  return (
    <div className="App">
      <h2>App.js</h2>
      <Router>
        <Route exact path="/" component={DemoHomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/resetpassword" component={ResetPasswordPage} />
        <Route exact path="/sendresetlink" component={SendResetPasswordLinkPage}/>
        <Route exact path="/confirm" component={ConfirmationPage} />

        // Need to implement protected routes for pages below as
        // they can only be visible once authorised and authenticated
        <Route exact path="/mingyang" component={DashboardMingyang} />
        <Route exact path="/seongjune" component={DashboardSeongjune} />
        <Route exact path="/harpreet" component={DashboardHarpreet} />
      </Router>
    </div>
  );
};
export default App;
