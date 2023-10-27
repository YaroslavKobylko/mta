import Transaction from '.';
import React from 'react';

export default {
  title: 'Example/Transaction',
  component: Transaction,
};

const Template = (args) => <Transaction {...args}/>

export const Income = Template.bind({});
Income.args = {
    transaction:{
        label:'some income',
        value: 23
    }
};

