import Home from "./pages/home/Home";
import Login from "./pages/login/Signin";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";
import Connection from "./pages/connection/connection";
import Notification from "./pages/notification/Notification";
import Forgetpassword from "./pages/forgetPassword/ForgetPassword";
import SetNewPassword from "./pages/forgetPassword/SetPassword";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/forgetpassword">
          {user ? <Redirect to="/" /> : <Forgetpassword />}
        </Route>
       <Route path="/setnewpassword">
          {user ? <Redirect to="/" /> : <SetNewPassword />}
        </Route>
        <Route path="/connection">
          {!user ? <Redirect to="/" /> : <Connection />}
        </Route>
        <Route path="/messenger">
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>
        <Route path="/notification">
          {!user ? <Redirect to="/" /> : <Notification />}
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
