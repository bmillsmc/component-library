import React from "react";
import { storiesOf } from "@storybook/react";
import SelectInput from "./SelectInput";

storiesOf("Select Input", module)
    .add("Select Input Small", () => <SelectInput 
        fieldName="Select"
        options={["Option A", "Option B", "Option C"]}
    />)