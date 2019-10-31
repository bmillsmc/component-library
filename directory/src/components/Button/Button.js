import React from "react";
import "./Button.css"

function Button(props) {
    let classList = "";
    let types = ["primary","danger","warning","success"];
    if(types.includes(props.type)) {
        classList += ` button-${props.type}`
    } else {
        classList += ` button-default`;
    }
    if(props.large) {
        classList += ` button-large`
    }
    return (
        <input className={classList} value={props.label} type="submit"/>
    );
}

export default Button;