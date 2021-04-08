import React from "react";
import "./App.scss";
import { Navbar } from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";

const App: React.FC<{}> = () => {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      {/* SideDrawer */}
      {/* Backdrop */}
      <main>
        <Switch>
          {/* HomeScreen */}
          <Route exact path="/" component={HomePage} />
          {/* ProductScreen */}
          <Route exact path="/product/:id" component={ProductPage} />
          {/* CartScreen */}
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
