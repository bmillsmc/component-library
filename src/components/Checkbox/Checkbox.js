import React, { Component } from "react";
import Icon from "../Icon/Icon";
import "./Checkbox.css";

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedSrc: props.checked,
            uncheckedSrc: props.unchecked,
            checked: false,
            label: props.label
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
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        if(this.state.label !== false) {
            return (
                <div className="check-wrap">
                    <div onClick={this.handleClick}>
                        {this.createIcon()}
                    </div>
                    <p>{this.state.label}</p>
                </div>
            );
        } else {
            return (
                <div onClick={this.handleClick}>
                    {this.createIcon()}
                </div>
            );
        }
        
    }
}

export default Checkbox;