 import {products,coupons } from  "../data/data";
 let intialState={
     products,
     coupons,
     productPage:{},
     cart:[],
     currCoupon:"",
     isCouponApplied:false
 }
 function ShoppingReducer(state=intialState,action){
    // console.log(action.payload);
    // console.log(state.cart);
       switch(action.type){
           case "add_cart":
            //    let flag;
//                console.log(action.payload);
// let cart=[];
            //    for(let i=0;i<state.cart.length;i++){
            //        console.log(action.payload );
            //     //    state.countCart=Number(state.cart[i].Qty)
            //  if(state.cart[i].product===action.payload.product){
            //         // console.log("helooo",i);
            //         // console.log(state.cart[i].product);
            //         // console.log(action.payload.product);
            //            flag=true;
            //            state.cart[i].Qty=Number(action.payload.Qty)              
            //        }
            //        console.log(state.cart);
            //    }
              
            let desiredproduct = state.products.find((product) => {
              
                return product.id == action.payload.id
            })
            // console.log("desired prodcu",desiredproduct);
            // check if it already exist in cart 
            let isPresent = state.cart.find((product) => {
                return product.id == action.payload.id
            })
            // console.log("is present",isPresent);
            let cart = []
            if (isPresent) {
                cart = state.cart.map((product) => {
                    return product.id == action.payload.id ?
                     { ...product,
                         Qty: 
                         action.payload.setcart?action.payload.Qty:product.Qty+ action.payload.Qty } : product
                });
            } else {
                cart = [...state.cart, { ...desiredproduct, Qty: 1 }]
            }
            //  if exist increase quantity 
            // else put quantity 
            console.log(cart)
            return {
                ...state,
                cart
            }
          
              
        
        
       
           case "add_product":
            console.log(action.payload);
               return{     
                   ...state,
                   productPage:action.payload
               }
               case "delete_product":
                   console.log("deltete");
                   console.log("cart kono ",state.cart);
                   console.log("action.payload",action.payload);
                let newcartProducts=state.cart.filter((obj)=>{
                    console.log("obj product",obj);
                    return obj.id!=action.payload.id;
             })  
            
            
                console.log(newcartProducts);
                   return{
                         ...state,
                               cart:newcartProducts
                   }
                   case "applyCoupon": return{
                    ...state,
                   currCoupon:action.payload,
                   isCouponApplied:true,
                 }
               
           default:
               return state;

       }

 }
 export default ShoppingReducer;

//  <input className={[classes.input]} type="number"
                            //   min="1" value={value}