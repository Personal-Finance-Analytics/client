import { BrowserRouter as Router, Route } from "react-router-dom";
import SendResetPasswordLinkPage from "./pages/SendResetPasswordLinkPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import LoginPage from "./pages/LoginPage";
import DemoHomePage from "./pages/DemoHomePage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <div className="App">
      <h2>App.js</h2>
      <Router>
        <Route exact path="/" component={DemoHomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/resetpassword" component={ResetPasswordPage} />
        <Route
          exact
          path="/sendresetlink"
          component={SendResetPasswordLinkPage}
        />
        <Route exact path="/confirm" component={ConfirmationPage} />
        <Route exact path="/home" component={DashboardPage} />
      </Router>
    </div>
  );
};
export default App;
