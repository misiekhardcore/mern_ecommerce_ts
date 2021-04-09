import React, { useState } from "react";
import "./App.scss";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { Backdrop } from "./components/Backdrop";
import { SideDrawer } from "./components/SideDrawer";

const App: React.FC<{}> = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <Router>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <SideDrawer toggle={toggle} setToggle={setToggle} />
      <Backdrop toggle={toggle} setToggle={() => setToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
