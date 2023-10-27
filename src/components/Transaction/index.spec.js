import React from 'react';
import Transaction from '.';
import {shallow} from 'jest';

describe('Transaction component', () => {
    it('should show transaction', () => {
        const sut = shallow(<Transaction/>);
        expect(sut).toMatchSnapshot();
    })
})