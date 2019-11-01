import React, { Component } from "react";
import TextInputLabel from "../TextInputLabel/TextInputLabel";
import "./TextInputButton.css";

class TextInputButton extends Component {
    constructor(props) {
        super(props);
        let large;
        let small;
        let classList = "";
        if(props.big) {
            large = true;
            small = false;
            classList += ` text-butt-wrap-big`
        } else {
            large = false;
            small = true;
            classList += ` text-butt-wrap-small`
        }
        this.state = {
            large: large,
            small: small,
            action: props.action,
            butText: props.butText,
            placeholder: props.placeholder,
            classList: classList
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        evt.preventDefault();
        this.state.action(evt.target.parentNode.childNodes[0][0].value)
    }

    render() {
        return(
            <div className={this.state.classList}>
                <TextInputLabel 
                    placeholder={this.state.placeholder}
                    small={this.state.small}
                    large={this.state.large}
                />
                <input type="submit" className="submit" onClick={this.handleClick} />
            </div>
        );
    }
}

export default TextInputButton;