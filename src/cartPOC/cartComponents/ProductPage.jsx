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
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function ProductPage(props) {
    const useStyles = makeStyles({
        root: {
          maxWidth: 475,
        },
        display:{
          border: "none", 
          boxShadow: "none" 
            
        },
        width:
        {
                maxWidth:755
               
        }
      });
      const classes = useStyles();
      let {productPage,cart}=props;
      let countCart=0;
      
        // console.log(props.cartProducts);
        for (let i = 0; i < productPage.length; i++) {
          // console.log(cart[i])
          countCart += Number(productPage[i].Qty);
          ;
      }
      // let isDisabled;
      // for (let i = 0; i < cart.length; i++) {
      //   console.log(productPage);
      //   console.log(cart[i].product);
      //     if (cart[i].product === productPage[i]) {
           
      //     }
      // }
// console.log(isDisabled);
      console.log(cart);
      console.log(productPage.title);
      return (
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",flexDirection:"row",marginTop:"3rem"}}>
            {
              <>
                      <Card className={[classes.root,classes.display]}>
                           <CardMedia
                          component="img"
                          alt={productPage.title}
                        
                          height="770"
                         
                          image={productPage.image}
                          title={productPage.title}
                          
                          >

                             </CardMedia>

                        </Card>

                        <Card className={[classes.width,classes.display]}>
                         <Typography variant="h2" style={{fontWeight:"bold"}}>

                           {productPage.title}
                         </Typography>
                         <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",marginTop:"2rem",marginBottom:"2rem"}}>
                         <Typography varaint="h4" style={{color:"darkgray",fontWeight:"bold",fontSize:"25px"}}> M.R.P. </Typography> 
                         <Typography color="secondary"  style={{fontWeight:"bold",fontSize:"25px",marginLeft:"1.5rem"}}>
                             ${productPage.price}
                         </Typography>
                         </div>
                         <Typography variant="h5" style={{fontWeight:"bold"}}>
                           Description
                           </Typography>
                           <Typography style={{ fontSize:"1rem",marginTop:"2rem",marginBottom:"2rem"}}>
                             {productPage.description}
                           </Typography>
                           <Button  variant="contained" color="secondary" style={{width:"13rem",marginTop:"2rem",marginBottom:"3rem",height:"4rem",fontSize:"1rem"}}   
                           onClick={()=>{props.setCart(productPage)}} startIcon={<AddShoppingCartIcon style={{fontSize:"2rem"}}></AddShoppingCartIcon> }>
                           {"Add to Cart"}
                             
                           </Button>
                        </Card>
                        </>
            }
             
              {/* marginLeft:"50px",marginTop:"2rem",marginBottom:"1.3rem", */}
          </div>
      )
  }
  const mapStateToProps=store=>{
      return store;
  }
  const mapDispatchtoProps = dispatch => {
         
      // handler function 
      return {
          setCart : (productPage,Qty=1) => {
              // dispatch action 
              return dispatch({ type: "add_cart",
            payload:{Qty,id:productPage.id }})
          },
         
      }
  }
  const HigherOrderComponent=connect(mapStateToProps,mapDispatchtoProps)(ProductPage)
  export default HigherOrderComponent;
  
  

