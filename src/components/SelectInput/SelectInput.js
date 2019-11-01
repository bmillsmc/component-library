import React, { Component } from "react";
import "./SelectInput.css";

class SelectInput extends Component {
    constructor(props) {
        super(props);
        let optionList = props.options.slice(0);
        optionList.unshift(props.fieldName)
        let classList = "";
        if(props.medium) {
            classList += ` select-medium`
        } else if (props.large) {
            classList += ` select-large`
        } else {
            classList += ` select-small`
        }
        if(props.filled) {
            classList += `-filled`
        } else {
            classList += `-outline`
        }
        this.state = {
            optionList: optionList,
            classList: classList
        }
    }

    render() {
        return (
            <select defaultValue="default" className={this.state.classList}>
                {this.state.optionList.map((element, index) => {
                    if(index === 0) {
                        return <option disabled hidden value="default" key={index}>{element}</option>
                    } else {
                        return <option value={element} key={index}>{element}</option>
                    }
                })}
            </select>
        );
    }
}



export default SelectInput;