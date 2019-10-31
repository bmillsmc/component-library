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
    
    