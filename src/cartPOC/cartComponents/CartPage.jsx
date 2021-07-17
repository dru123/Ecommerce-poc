  
import React ,{useState}from 'react'
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CartQuantity from './CartQuantity';
import CartDetails from './CartDetails';


function CartPage(props) {
    let cart=props.cart
    console.log(cart);
    let totalAmount=0;
    let countCart=0;
    for(let i=0;i<cart.length;i++){
        console.log(Number((cart[i].price)*cart[i].Qty));
        countCart += Number(cart[i].Qty);
        totalAmount+=Number((cart[i].price)*cart[i].Qty);
        console.log(totalAmount);
    }

    
    console.log(totalAmount);
    const useStyles = makeStyles({
        root: {
        marginTop:"2rem"
        },
        display:{
          border: "none", 
          boxShadow: "none" 
            
        },
        cardWidth:{
               maxWidth:"20vw"
        },
        width:
        {
                maxWidth:"67vw",
                
               
        }
      });
      const classes = useStyles();
      
      console.log(cart);
    return (
        <div>
            

                
                <Card className={[classes.width,classes.root]} style={{marginBottom:"1rem"}}>
                    <Typography variant="h2" style={{fontWeight:"bold",textAlign:"center",marginBottom:".9rem"}}>Shopping Cart</Typography>
                </Card>
                
                {
                    cart.map((products)=>{
                         return(
                             <CartQuantity obj={products} setCart={props.setCart} setDelete={props.setDelete}  cart={cart} ></CartQuantity>
                         )
                        
                })
                
            }
   
   {/*    */}
   <div>
   <CartDetails ></CartDetails>
   </div>
            

            
            
        </div>
    )
        }
const mapStateToProps=store=>{
    return store;
}
const mapDispatchtoProps = dispatch => {
         
    // handler function 
    return {
        setCart : (product,Qty) => {
            // dispatch action 
            return dispatch({ type:"add_cart",
          payload:{Qty,id:product.id,setcart:true}})
        },
       setDelete:(product)=>{
         return  dispatch({type:"delete_product",payload:product})
       }
    }
}

const HigherOrderComponent=connect(mapStateToProps,mapDispatchtoProps)(CartPage)
export default HigherOrderComponent;
