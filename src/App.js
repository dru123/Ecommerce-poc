import React from 'react';
import Ball from './Component/Ball';
import Bat from './Component/Bat';
import EcommerceStore from '../src/cartPOC/app/store'
// import TaskList from './Component/TaskList';
import InputContainer from './Component/InputContainer';
import Ecommerce from './cartPOC/Ecommerce';
import User from './Component/User';
import { Provider } from "react-redux";
// import store from './store';
function App() {
  return (
    // 4
    <Provider store={EcommerceStore}>
   
      <div className="App">
        {/* <Ball></Ball>
        <Bat></Bat> */}
      
        {/* <InputContainer></InputContainer> */}
     {/* <User></User> */}
     <Ecommerce></Ecommerce>
      </div>
    </Provider>
  );
}
export default App;