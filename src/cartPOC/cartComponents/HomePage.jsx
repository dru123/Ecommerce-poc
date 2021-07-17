import React from 'react'
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

function HomePage(props) {
    let isDisabled;
const useStyles = makeStyles({
    root: {
      maxWidth: 445,
    },
    display:{
       
        
    }
  });
  const classes = useStyles();
    let {products,cart}=props;
    console.log(cart.length);
    console.log(cart);
    let countCart=0;

      // console.log(props.cartProducts);
      for (let i = 0; i < cart.length; i++) {
        console.log(cart[i])
        countCart += Number(cart[i].Qty);
        ;
    }
   
    return (
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",flexDirection:"row",marginTop:"3rem"}}>
            {
                products.map((product)=>{
                 
                    return (
                    //     <div key ={product.id} >
                    //   <img src={product.image}  style={{ height: "20vw" }}></img>
                    //   <h2>{product.title}</h2>
                    //   <div>{product.description}</div>
                    //   <h3>{product.price}</h3>
                    //   <button onClick={props.setCart}>Add to Cart</button>
                    //         </div>

                     <Card className={[classes.root]} >
                         <CardActionArea>
                             <CardMedia
                          component="img"
                          alt={product.title}
                        
                          height="370"
                         
                          image={product.image}
                          title={product.title}
                          
                          >

                             </CardMedia>
                             <CardContent>
                             <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
                                     {product.title}
                            </Typography>
                               <Typography variant="body2" color="textSecondary" component="p">
                                         {product.description}
                              </Typography>
                             </CardContent>
                         </CardActionArea>
                     <Typography variant="h6" style={{textAlign:"center"}}>${product.price}</Typography>
                     <div style={{display:"flex" ,flexDirection:"row", justifyContent:"space-evenly",marginTop:"2rem",marginBottom:"1.3rem"}}>
                         <Link to='/product' style={{textDecoration:"none"}}>
                     <Button size="large" variant="contained" color="secondary" style={{width:"14rem"}}  onClick={()=>{props.setProduct(product)}} >
                             View Description
                      
                           </Button>
                           </Link>
                     <Button size="large" variant="contained" color="secondary" style={{width:"10rem"}}   
                     onClick={()=>{props.setCart(product)}}>
                           { "Add to Cart"}
                           </Button>
                           </div>
                  
                     </Card>
                    )
                })
            }
            {/* marginLeft:"50px",marginTop:"2rem",marginBottom:"1.3rem", */}
        </div>
    )
}
const mapStateToProps=store=>{
    return store;
}
const mapDispatchtoProps = dispatch => {
    //    action
    // handler function 
    return {
        setCart : (product,Qty=1) => {
            // dispatch action 
        
            return dispatch({ type: "add_cart",
            payload:{Qty,id:product.id},
            
           
        
         })
        },
     

        setProduct:(product)=>{
            console.log(product);
            return dispatch({
                type:"add_product",
                 payload:product})
        }
       
    }
}
const HigherOrderComponent=connect(mapStateToProps,mapDispatchtoProps)(HomePage)
export default HigherOrderComponent;

