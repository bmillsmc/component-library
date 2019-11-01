import React from "react"
import { storiesOf } from "@storybook/react";
import NumberInput from "./NumberInput";

storiesOf("Number Input", module)
    .add("Number Input By 1s", () => <NumberInput 
        min={0}
        max={50}
        step={1}
        value={1}
    />)
    .add("Number Input By 2s", () => <NumberInput 
        min={0}
        max={50}
        step={2}
        value={2}
    />)