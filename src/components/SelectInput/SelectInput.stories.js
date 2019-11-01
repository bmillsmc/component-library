import React from "react";
import { storiesOf } from "@storybook/react";
import SelectInput from "./SelectInput";

storiesOf("Select Input", module)
    .add("Select Input Small Outlined", () => <SelectInput 
        fieldName="Select"
        options={["Option A", "Option B", "Option C"]}
    />)
    .add("Select Input Small Filled", () => <SelectInput 
        fieldName="Select"
        options={["Option A", "Option B", "Option C"]}
        filled
    />)
    .add("Select Input Medium Outlined", () => <SelectInput 
        fieldName="Select"
        options={["Option A", "Option B", "Option C"]}
        medium
    />)
    .add("Select Input Medium Filled", () => <SelectInput 
        fieldName="Select"
        options={["Option A", "Option B", "Option C"]}
        medium
        filled
    />)
    .add("Select Input Large Outlined", () => <SelectInput 
        fieldName="Select"
        options={["Option A", "Option B", "Option C"]}
        large
    />)
    .add("Select Input Large Filled", () => <SelectInput 
        fieldName="Select"
        options={["Option A", "Option B", "Option C"]}
        large
        filled
    />)