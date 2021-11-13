import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Explore from './pages/Explore/Explore/Explore';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import OrderPurches from './pages/OrderPurches/OrderPurches';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './pages/DashBoard/DashBoard/DashBoard';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/orderPurches/:id">
            <OrderPurches></OrderPurches>
          </PrivateRoute>
          <PrivateRoute path="/dashBoard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
