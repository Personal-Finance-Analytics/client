import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
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
      {/* <SendResetPasswordLinkPage /> */}
      {/* <ConfirmationPage /> */}
      {/* <ResetPasswordPage /> */}
      {/* <LoginPage /> */}
      {/* <DemoHomePage />
      <DashboardPage /> */}
      <Router>
        <Route exact path="/" component={DemoHomePage} />
        <Route exact path="/login" component={LoginPage} />
      </Router>
    </div>
  );
};
export default App;
