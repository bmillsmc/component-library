import React from "react"
import { storiesOf } from "@storybook/react";
import NumberInput from "./NumberInput";

storiesOf("Number Input", module)
    .add("Number Input", () => <NumberInput 
        min={0}
        max={50}
        step={2}
        value={2}
    />)