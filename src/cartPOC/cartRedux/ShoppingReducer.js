 import {products } from  "../data/data";
 let intialState={
     products,
     countCart:0
 }
 function ShoppingReducer(state=intialState,action){
       switch(action.type){
           case "add_cart":
           return{
               ...state,
                  countCart:state.countCart+1,

           };
           default:
               return state;
       }

 }
 export default ShoppingReducer;