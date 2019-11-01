import React from "react";
import { storiesOf } from "@storybook/react";
import TextInputLabel from "./TextInputLabel";

storiesOf("Text Input With Label", module)
    .add("Small", () => <TextInputLabel 

    />)
    .add("Small W/ Placeholder and Label", () => <TextInputLabel 
        placeholder="Enter Email..."
        label="Email"
    />)
    .add("Small W/ Label", () => <TextInputLabel 
        label="Email"
    />)
    .add("Small W/ Placeholder", () => <TextInputLabel 
        placeholder="Enter Email..."
    />)
    .add("Medium", () => <TextInputLabel 
        medium
    />)
    .add("Medium W/ Placeholder and Label", () => <TextInputLabel 
        placeholder="Enter Email..."
        label="Email"
        medium
    />)
    .add("Medium W/ Label", () => <TextInputLabel 
        label="Email"
        medium
    />)
    .add("Medium W/ Placeholder", () => <TextInputLabel 
        placeholder="Enter Email..."
        medium
    />)
    .add("Large", () => <TextInputLabel 
        large
    />)
    .add("Large W/ Placeholder and Label", () => <TextInputLabel 
        placeholder="Enter Email..."
        label="Email"
        large
    />)
    .add("Large W/ Label", () => <TextInputLabel 
        label="Email"
        large
    />)
    .add("Large W/ Placeholder", () => <TextInputLabel 
        placeholder="Enter Email..."
        large
    />)