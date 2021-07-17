import React, { useState ,useEffect} from 'react'
import { Card, CardMedia, Typography, Button, makeStyles, CardContent, CardActions, TextField }
    from "@material-ui/core";
import { connect } from 'react-redux';


function CartDetails(props) {
    // let{cart}=props
    // console.log("8",cart);
    
    // console.log("29",cart);
    
    const[currCode,setCode]=useState("");
    const[disabled,setDisbale]=useState(true);
    let allCoupons=props.coupons;
    console.log("ALL",allCoupons);
    let coupon=props.currCoupon;
    console.log("coupon",coupon);
    let cart=props.cart;
    let isCouponApplied=props.isCouponApplied;
    console.log("applied",isCouponApplied);
    console.log(cart);
    let totalAmount=0;
    let countCart=0;
    for(let i=0;i<cart.length;i++){
        console.log(Number((cart[i].price)*cart[i].Qty));
        countCart += Number(cart[i].Qty);
        totalAmount+=Number((cart[i].price)*cart[i].Qty);
        console.log(totalAmount);
    }
    const useStyles = makeStyles({
        root: {
        marginTop:"2rem"
        },
        display:{
          border: "none", 
          boxShadow: "none" 
            
        },

        cardWidth:{
               maxWidth:"20vw",
            textAlign:"center",
            marginLeft:"75vw",
           marginTop:"-153vh",
           position:"absolute",
           width:"33vw"
         
        //    marginBottom:"-80vh"
        },
        width:
        {
                maxWidth:"67vw",
               
               
        }
      });
      const classes = useStyles();
     
     if(coupon!=""){
         totalAmount-=allCoupons[coupon].discount;
     }
     function handleCode(e){
         if(e.target.value!=""){
             setDisbale(false);
             setCode(e.target.value)
         }else{
             setDisbale(true);
             setCode(e.target.value)
         }
     }
    return (
        <div>
      {/* <Card style={{marginLeft:"75vw",marginTop:"-130rem",textAlign:"center",width:"55rem",position:"fixed"}} className={[classes.cardWidth]}>
<CardContent>
<Typography style={{fontSize:"2rem",marginTop:"rem"}}>
Cart Summary</Typography> 
{/* <Typography style={{fontWeight:"bold",marginTop:".5rem",fontSize:"1.4rem"}}>Subtotal({countCart})<Typography style={{fontWeight:"",color:"red",fontSize:"1.4rem"}}>
$ {totalAmount}</Typography></Typography> */}
{/* </CardContent> */}
      {/* </Card>  */}
<Card   className={[classes.cardWidth]}>
    <CardContent>
         <Typography style={{fontSize:"2.5rem",fontWeight:"bold"}}>Cart Summary</Typography>
         <Typography style={{fontWeight:"bold",marginTop:".5rem",fontSize:"1.4rem"}}>Subtotal({countCart})<Typography style={{fontWeight:"",color:"red",fontSize:"1.4rem"}}>$ {totalAmount}</Typography></Typography>
         {isCouponApplied ==true? <Typography variant="h6" style={{ fontWeight: "bolder" }}>Code Applied !</Typography> :
                <>
                <TextField id="standard-search" label="Enter Code" type="search" value={currCode}
                 onChange={(e) => {
                     handleCode(e);
                 }} />
               <Button variant="outlined" disabled={disabled}
                    onClick={() => {
                        console.log(currCode);
                        props.applyCoupn(currCode);
                    }}>Apply</Button>
                    </>

            }

            <Button variant="contained" color="primary"
                style={{ marginTop: "1rem" }}>Proceed to Pay</Button>

        
    </CardContent>
</Card>
        </div>
    )
}
const mapStatetoProps = (store) => {
    console.log(store);
    return store;
}
// export default CartDetails

const mapDispatchtoProps = (dispatch) => {
    return {
        applyCoupn: (code) => {
            dispatch({ type: "applyCoupon", payload: code })
        }
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(CartDetails);
