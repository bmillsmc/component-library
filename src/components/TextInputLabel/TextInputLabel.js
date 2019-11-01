import React, { Component } from "react";
import "./TextInputLabel.css";

class TextInputLabel extends Component {
    constructor(props) {
        super(props);
        let placeholder;
        let label;
        let classList = "";
        if(props.medium) {
            classList += ` input-medium`;
        } else if(props.large) {
            classList += ` input-large`;
        } else {
            classList += ` input-small`;
        }
        if(!props.label && !props.placeholder) {
            placeholder = "";
            label = "";
        } else if (!props.label) {
            label = "";
            placeholder = props.placeholder;
        } else if(!props.placeholder) {
            label = props.label;
            placeholder = label;
        } else {
            placeholder = props.placeholder;
            label = props.label;
        }
        this.state = {
            input: "",
            placeholder: placeholder,
            label: label,
            classList: classList
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <form>
                <label htmlFor={this.state.label} className="label">{this.state.label}</label>
                <input type="text" id={this.state.label} placeholder={this.state.placeholder} className={this.state.classList}/>
            </form>
        );
    }
}

export default TextInputLabel;