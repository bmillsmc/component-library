import React from "react";
import { storiesOf } from "@storybook/react";
import SelectInput from "./SelectInput";

storiesOf("Select Input", module)
    .add("Select Input Small", () => <SelectInput 
        fieldName="Select"
        options={["Option A", "Option B", "Option C"]}
    />)
    .add("Select Input Medium", () => <SelectInput 
        fieldName="Select"
        options={["Option A", "Option B", "Option C"]}
        medium
    />)
    .add("Select Input Large", () => <SelectInput 
        fieldName="Select"
        options={["Option A", "Option B", "Option C"]}
        large
    />)