import React from 'react';
import { connect } from "react-redux";

function NavBar(props) {
     console.log(props.products);
        
    return (

        <div style={{ height: "3rem", backgroundColor: "lightgray", color: "black", fontSize: "150%", }}>
            NavBar
            <span style={{ marginLeft: "4rem" }}>{props.countCart}</span>
        </div>
    )
}
function mapStatetoProps(store) {
    return store;
}

const  HigherOrderComponent =connect(mapStatetoProps,)(NavBar)
export default HigherOrderComponent;

