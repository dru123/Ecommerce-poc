import React,{useEffect,useState} from 'react';
import { connect } from "react-redux";
import {AppBar,Toolbar,Typography,Button,Badge, IconButton} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';

function NavBar(props) {
    let cart=props.cart;
    console.log("29",cart);
    // let totalAmount=0;
    let countCart=0;
    
    for(let i=0;i<cart.length;i++){
       
        countCart += Number(cart[i].Qty);
        console.log("15",countCart);
    
    }

  
     console.log(props.products);
        
    return (

        // <div style={{ height: "3rem", backgroundColor: "lightgray", color: "black", fontSize: "150%", }}>
        //     NavBar
        //     <span style={{ marginLeft: "4rem" }}>{props.countCart}</span>
        // </div>
        <div  >
        <AppBar position="static" style={{backgroundColor:"green"}} >
  <Toolbar> 
      <Typography variant="h6" style={{fontWeight:"bold",fontFamily:"sans-serif"}}>
      Redux Shopping
    </Typography>
    <div style={{marginLeft:"87%",fontSize:'2.2rem',marginBottom:'-0.8rem',display:"flex",flexDirection:"column"}}>
    <IconButton aria-label="show 4 new mails"color="inherit">

    <Typography variant="h6" style={{marginLeft:".5rem"}} >
    <Badge badgeContent={countCart} color="secondary">
    <Link to='/cart' style={{textDecoration:"none"}}>
    <AddShoppingCartIcon style={{fontSize:"2rem",marginBottom: "1rem"}} ></AddShoppingCartIcon>
    </Link>
    </Badge>

        </Typography>
    </IconButton>
  
 
    </div>
  </Toolbar>
</AppBar>
</div>
    )
}
function mapStatetoProps(store) {
    console.log("56",store.cart);
    return store;

}

const  HigherOrderComponent =connect(mapStatetoProps)(NavBar)
export default HigherOrderComponent;
