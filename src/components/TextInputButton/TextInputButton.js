import React, { Component } from "react";
import TextInputLabel from "../TextInputLabel/TextInputLabel";
import "./TextInputButton.css";

class TextInputButton extends Component {
    constructor(props) {
        super(props);

        this.super = {
            
        }
    }

    render() {
        return(
            <form>
                <div className="text-butt-wrap">
                    <TextInputLabel 

                    />
                    <input type="submit" />
                </div>
            </form>
        );
    }
}

export default TextInputButton;