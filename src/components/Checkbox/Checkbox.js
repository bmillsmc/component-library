import React, { Component } from "react";
import Icon from "../Icon/Icon";
import "./Checkbox.css";

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedSrc: props.checked,
            uncheckedSrc: props.unchecked,
            checked: false
        }
    }

    createIcon() {

    }

    handleClick() {

    }

    render() {
        return (
            this.createIcon()
        );
    }
}

export default Checkbox;