import React from "react";
import "./Button.css"

function Button(props) {
    let classList = "";
    let variate = ["white"]
    let types = ["primary","danger","warning","success"];
    if(types.includes(props.type)) {
        classList += ` button-${props.type}`
    } else {
        classList += ` button-default`;
    }
    if(variate.includes(props.variate)) {
        classList += ` button-${props.variate}`;
    }
    return (
        <input className={classList} value={props.label} type="submit"/>
    );
}

export default Button;