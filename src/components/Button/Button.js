import React from "react";
import "./Button.css"
// import Icon from "./../Icon/Icon"

function Button(props) {
    let classList = "";
    let iconComp = {};
    let icon = ["cart", "heart"]
    let divClass = ""; //used to set the class of the div if there is an icon
    let variate = ["white", "blur"];
    let types = ["primary","danger","warning","success"];
    if(types.includes(props.type)) {
        classList += ` button-${props.type}`
        
    } else {
        classList += ` button-default`;
    }
    if(variate.includes(props.variate)) {
        classList += `-${props.variate}`;
    }
    if(props.large) {
        classList += ` button-large`
    }
    if(icon.includes(props.icon)) {
        // iconComp = <Icon src={`../icons/${props.icon}.svg`} />
        classList += ` button-icon`;
        divClass += ` icon-holder`
        if(props.iconText) {

        }
    }
    return (
        // <div className={divClass}>
        //     {iconComp}
            <input className={classList} value={props.label} type="submit"/>
        // </div>
        
    );
}

export default Button;