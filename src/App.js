import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Order from './components/Order/Order';
import Manage from './components/Manage/Manage';
import NoMatch from './components/NoMatch/NoMatch';
import ProductInfo from './components/ProductInfo/ProductInfo';

const App = () => {

  return (
    <div>
      <Router>
        <Header />
        <Switch >
          <Route exact path="/" component={Shop} />
          <Route path="/shop" component={Shop} />
          <Route path="/review" component={Order} />
          <Route path="/manage" component={Manage} />
          <Route path="/product/:product_Key" component={ProductInfo} />
          <Route path="*" component={NoMatch} />

        </Switch>
      </Router>
    </div>
  );
}

//rsc arrow functional component 

export default App;
