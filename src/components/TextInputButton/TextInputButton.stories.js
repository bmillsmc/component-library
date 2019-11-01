import React from "react";
import { storiesOf } from "@storybook/react";
import TextInputButton from "./TextInputButton";

storiesOf("Text Input With Button", module)
    .add("Text Input W/ Button Small", () => <TextInputButton 
        action={val => {
            console.log(val);
        }}
        placeholder="Voucher code"
        butText="Redeem"
    />) 
    .add("Text Input W/ Button Big", () => <TextInputButton 
        action={val => {
            console.log(val);
        }}
        placeholder="Voucher code"
        butText="Redeem"
        big
    />) 