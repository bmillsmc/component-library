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

        this.createIcon = this.createIcon.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    createIcon() {
        if(this.state.checked === true) {
            return <Icon 
                src={this.state.checkedSrc}
            />
        } else {
            return <Icon 
                src={this.state.uncheckedSrc}
            />
        }
    }

    handleClick() {

    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.createIcon()}
            </div>
        );
    }
}

export default Checkbox;