import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";
import black_checkbox_unchecked from "../icons/black-checkbox-empty.svg"
import black_checkbox_checked from "../icons/black-checkbox-checked.svg"

storiesOf("Checkbox", module)
    .add("Black Checkbox", () => <Checkbox 
        checked={black_checkbox_checked}
        unchecked={black_checkbox_unchecked}
        
    />)