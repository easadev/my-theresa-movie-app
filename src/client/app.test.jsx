import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MovieApp } from './app.jsx';


it('tests app navigation from categories to detail movie', () => {
    const initialState = {
        categories: [{
            name: 'A Category',
            movies: [{
                id: 1,
                title: 'A Movie',
                overview: 'My Overview'
            }],
        }],
    };
    render(<MemoryRouter>
        <MovieApp initialState={initialState} />
    </MemoryRouter>);

    const movieLink = screen.getByRole('link', { name: /a movie/i });

    act(() => {
        fireEvent.click(movieLink);
    });

    expect(screen.queryByText('My Overview')).toBeDefined();

});