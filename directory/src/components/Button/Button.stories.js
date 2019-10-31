import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf("Button", module) 
    .add("Default", () => <Button 
        label="Default"
    />)
    .add("Default White", () => <Button 
        label="Default"
        variate="white"
    />)
    .add("Default Blur", () => <Button 
        label="Default"
        variate="blur"
    />)
    .add("Default Large", () => <Button 
        label="Default"
        large
    />)
    .add("Default White Large", () => <Button 
        label="Default"
        variate="white"
        large
    />)
    .add("Default Blur Large", () => <Button 
        label="Default"
        variate="blur"
        large
    />)
    .add("Primary", () => <Button 
        label="Primary"
        type="primary"
    />)
    .add("Primary White", () => <Button 
        label="Primary"
        type="primary"
        variate="white"
    />)
    .add("Primary Blur", () => <Button 
        label="Primary"
        type="primary"
        variate="blur"
    />)
    .add("Primary Large", () => <Button 
        label="Primary"
        type="primary"
        large
    />)
    .add("Primary White Large", () => <Button 
        label="Primary"
        type="primary"
        variate="white"
        large
    />)
    .add("Primary Blur Large", () => <Button 
        label="Primary"
        type="primary"
        variate="blur"
        large
    />)
    .add('Danger', () => <Button 
        label="Danger"
        type="danger"
    />)
    .add("Danger White", () => <Button 
        label="Danger"
        type="danger"
        variate="white"
    />)
    .add("Danger Blur", () => <Button 
        label="Danger"
        type="danger"
        variate="blur"
    />)
    .add('Danger Large', () => <Button 
        label="Danger"
        type="danger"
        large
    />)
    .add("Danger White Large", () => <Button 
        label="Danger"
        type="danger"
        variate="white"
        large
    />)
    .add("Danger Blur Large", () => <Button 
        label="Danger"
        type="danger"
        variate="blur"
        large
    />)
    .add("Success", () => <Button 
        label="Success" 
        type="success"
    />)
    .add("Success White", () => <Button 
        label="Success"
        type="success"
        variate="white"
    />)
    .add("Success Blur", () => <Button 
        label="Success"
        type="success"
        variate="blur"
    />)
    .add("Success Large", () => <Button 
        label="Success" 
        type="success"
        large
    />)
    .add("Success White Large", () => <Button 
        label="Success"
        type="success"
        variate="white"
        large
    />)
    .add("Success Blur Large", () => <Button 
        label="Success"
        type="success"
        variate="blur"
        large
    />)
    .add("Warning", () => <Button 
        label="Warning"
        type="warning"
    />)
    .add("Warning White", () => <Button 
        label="Warning"
        type="warning"
        variate="white"
    />)
    .add("Warning Blur", () => <Button 
        label="Warning"
        type="warning"
        variate="blur"
    />)
    .add("Warning Large", () => <Button 
        label="Warning"
        type="warning"
        large
    />)
    .add("Warning White Large", () => <Button 
        label="Warning"
        type="warning"
        variate="white"
        large
    />)
    .add("Warning Blur Large", () => <Button 
        label="Warning"
        type="warning"
        variate="blur"
        large
    />)
    
    