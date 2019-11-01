import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";
import black_checkbox_unchecked from "../icons/black-checkbox-empty.svg"
import black_checkbox_checked from "../icons/black-checkbox-checked.svg"
import blue_checkbox_unchecked from "../icons/blue-checkbox-unchecked.svg"
import blue_checkbox_checked from "../icons/blue-checkbox-checked.svg"

storiesOf("Checkbox", module)
    .add("Black Checkbox", () => <Checkbox 
        checked={black_checkbox_checked}
        unchecked={black_checkbox_unchecked}
    />)
    .add("Black Checkbox Labeled", () => <Checkbox 
        checked={black_checkbox_checked}
        unchecked={black_checkbox_unchecked}
        label="Don't show this pop-up again"
    />)

    .add("Blue Checkbox", () => <Checkbox 
        checked={blue_checkbox_checked}
        unchecked={blue_checkbox_unchecked}
    />)
    .add("Blue Checkbox Labeled", () => <Checkbox 
        checked={blue_checkbox_checked}
        unchecked={blue_checkbox_unchecked}
        label="Don't show this pop-up again"
    />)