import Form from '.';
import React from 'react';

export default {
  title: 'Example/Form',
  component: Form,
};

const Template = (args) => <Form  {...args}/>

export const Income = Template.bind({});
Income.args = {
    onChange: () => {}
};

