
import React from 'react'
import {BrowserRouter as Router ,Route,Switch,Redirect} from 'react-router-dom';
import NavBar from './cartComponents/NavBar';
import ProductPage from "./cartComponents/ProductPage";
import CartPage from "./cartComponents/CartPage";
import HomePage from "./cartComponents/HomePage";

function Ecommerce() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/product" component={ProductPage}></Route>
                <Route path="/card" component={CartPage}>  </Route>
                <Route path="/" component={HomePage}></Route>
                <Redirect to='/'></Redirect>
            </Switch>
   <div>

            
</div>
        </Router>
     
    )
}

export default Ecommerce
