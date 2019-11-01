import React, { Component } from "react";
import "./SelectInput.css";

class SelectInput extends Component {
    constructor(props) {
        super(props);
        let optionList = props.options.slice(0);
        optionList.unshift(props.fieldName)
        this.state = {
            optionList: optionList
        }
    }

    render() {
        return (
            <select>
                {this.state.optionList.map((element, index) => {
                    if(index === 0) {
                        return <option disabled="disabled" selected="selected" value={element} key={index}>{element}</option>
                    } else {
                        return <option value={element} key={index}>{element}</option>
                    }
                })}
            </select>
        );
    }
}



export default SelectInput;