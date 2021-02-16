import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Auth, UserStorage, Shop, Order, Manage, NoMatch, ProductInfo, Shipment } from './components/Storage/Layout'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const App = () => {

  return (
    <Router>
      <UserStorage>
        <Switch >
          <Route exact path="/" component={Shop} />
          <Route path="/shop" component={Shop} />
          <Route path="/review" component={Order} />
          <PrivateRoute path="/manage">
            <Manage />
          </PrivateRoute>
          <Route path="/auth" component={Auth} />
          <PrivateRoute path="/shipment">
            <Shipment />
          </PrivateRoute>
          <Route path="/product/:product_Key" component={ProductInfo} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </UserStorage>
    </Router>
  );
}

export default App;
