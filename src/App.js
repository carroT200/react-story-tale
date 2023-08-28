import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:productName">
          <ProductDetail />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
