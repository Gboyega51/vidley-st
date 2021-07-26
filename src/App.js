import { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { getCurrentUser } from "./services/authService";
import Movies from "./components/Movies";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import MovieForm from "./components/MovieForm";
import { LoginForm } from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import logout from "./components/Logout";
import ProtectedRoute from "./components/common/ProtectedRoute";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={logout} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={this.state.user} />}
            ></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
