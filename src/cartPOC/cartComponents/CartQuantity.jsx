import React ,{useState}from 'react'
import { Card, CardMedia, Typography, Button, makeStyles, CardContent, CardActions } 
from "@material-ui/core";
import CartDetails from './CartDetails';

import DeleteIcon from '@material-ui/icons/Delete';

function CartQuantity(props){
  console.log(props);
    const[value,setValue]=useState(props.obj.Qty);
    console.log("11",props.obj);
    let totalAmount=0;
    console.log(value);
    const useStyles = makeStyles({
        root: {
        marginTop:"2rem"
        },
        display:{
          border: "none", 
          boxShadow: "none" 
            
        },
        width:
        {
                maxWidth:"69vw",
                
               
        }
      });
      let{cart}=props;
      console.log(cart);
      const classes = useStyles();
      let{Qty,product}=props;
  //  let countCart=0;
  //     for(let i=0;i<cart.length;i++){
  //         // console.log(Number((cart[i].product.price)*cart[i].Qty));
  //         countCart+=Number(cart[i].Qty)
  //         totalAmount+=Number((cart[i].product.price)*cart[i].Qty);
  //         // console.log(totalAmount);
  //     }
      // console.log(totalAmount);
return(

    <div style={{display:"flex",flexDirection:"column"}}>
       
    <Card className={[classes.width]}style={{height:"42rem",marginTop:"2rem",display:"flex",flexDirection:"row"}}>
            <div>
            <CardMedia
              component="img"
              alt={props.obj.title}
            
              
               style={{width:"33rem",height:"35rem",marginLeft:"1rem",marginTop:"3rem"}}
             
              image={props.obj.image}
            >

            </CardMedia>
            </div>
            
     <div style={{marginLeft:"4rem",marginTop:"2rem"}}>
    <Typography style={{fontWeight:"bold",color:"gray",fontSize:"2.5rem"}}>
        {props.obj.title}
    </Typography>
    <Typography style={{marginTop:"1.8rem",fontSize:"1.5rem",color:" #942424bf"}}>Quantity<input className={[classes.input]} type="number"
      min="1" value={value}
      style={{width:"5rem",border:"",outline:"none",border:"2px solid gainsboro",color:"gray",marginLeft:"1rem",fontSize:"large"}}
     onChange={(e)=>{ 
        setValue(e.target.value);
         console.log(e.target.value);

     props.setCart(props.obj,e.target.value)}}>
         </input></Typography>
        
      <Typography  style={{marginTop:"2.5rem",fontSize:"1.5rem"}}>{props.obj.description}</Typography>
         <Button color="secondary" variant="contained" startIcon={<DeleteIcon style={{fontSize:"1.9rem"}}></DeleteIcon>}
         style={{marginTop:"4rem",fontSize:"1.6rem"}} onClick={()=>{props.setDelete(props.obj)}}>Delete</Button>
         <Typography style={{marginLeft:"14rem",fontWeight:"bold",fontSize:"2rem",marginTop:"-3.5rem"}}
         >$ {props.obj.price}</Typography>
      
    </div>

    </Card>
    
    
   
  
    </div>
)
     }
     export default CartQuantity