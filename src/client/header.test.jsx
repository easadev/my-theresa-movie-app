import { create } from 'react-test-renderer';
import React from 'react';
import { Header } from './header';
import { MemoryRouter } from 'react-router-dom';

it('Tests Header component mounts fine', () => {
    expect(create(<>
    <MemoryRouter >
        <Header />
    </MemoryRouter>
    </>).toJSON()).toMatchSnapshot();
});