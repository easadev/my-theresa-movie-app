import React from 'react';

import { render, screen, act, fireEvent } from '@testing-library/react';
import { CategoriesPage } from './categories-page.jsx';
import { MemoryRouter } from 'react-router-dom';


it('Tests the carousel functionality', () => {
    const categories = [{
        name: 'A Category Name',
        movies: [{
            id: 1,
            title: 'A Movie'
        }],
    }];
    const onMovieClicked = jest.fn();

    render(<>
        <MemoryRouter>
            <CategoriesPage categories={categories} onMovieClicked={onMovieClicked}>

            </CategoriesPage>
        </MemoryRouter>
    </>);


    act(() => {
        fireEvent.click(screen.getByRole('link'));
    });

    expect(onMovieClicked).toBeCalledWith({ id: 1, title: 'A Movie' });
})