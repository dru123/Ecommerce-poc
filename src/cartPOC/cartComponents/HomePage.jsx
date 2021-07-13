import React from 'react'
import {connect} from 'react-redux';

function HomePage(props) {
    let {products}=props;
    return (
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
            {
                products.map((product)=>{
                    return (
                        <div key ={product.id} >
                      <img src={product.image}  style={{ height: "20vw" }}></img>
                      <h2>{product.title}</h2>
                      <div>{product.description}</div>
                      <h3>{product.price}</h3>
                      <button onClick={props.setCart}>Add to Cart</button>
                            </div>
                    )
                })
            }
            
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
        setCart : () => {
            // dispatch action 
            return dispatch({ type: "add_cart" })
        },
       
    }
}
const HigherOrderComponent=connect(mapStateToProps,mapDispatchtoProps)(HomePage)
export default HigherOrderComponent;

