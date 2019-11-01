import React, { Component } from "react";
import "./NumberInput.css";

class NumberInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
            min: props.min,
            max: props.max,
            step: props.step
        }

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement(evt) {
        evt.preventDefault();
        let newVal = this.state.value;
        if(this.state.max >= this.state.value + this.state.step) {
            newVal = this.state.value + this.state.step;
        } 
        this.setState({
            value: newVal
        })
    }

    handleDecrement(evt) {
        evt.preventDefault();
        let newVal = this.state.value;
        if(this.state.min <= this.state.value - this.state.step) {
            newVal = this.state.value - this.state.step;
        }
        this.setState({
            value: newVal
        })
    }

    render() {
        return (
            <div className="counter-wrapper">
                <input type="submit" value="-" onClick={this.handleDecrement}/>
                <p>{this.state.value}</p>
                <input type="submit" value="+" onClick={this.handleIncrement} />
            </div>
        )
    }
}

export default NumberInput;