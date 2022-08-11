import React, {useState} from 'react';
import { WishList, useWishListManager } from '../../hooks/use-whishlist';
import { MoviePage, getCategoryModifier, supportedCategoryModifiers } from './movie-page.jsx';

import { render, screen, act, fireEvent } from '@testing-library/react';

const movie = {
    id: 1,
    title: 'A Movie',
    overview: 'An Overview',
};

function TestApp() {
    const [wishListState, setWishListState] = useState({});
    const wishList = useWishListManager(wishListState, setWishListState);
    return (<WishList.Provider value={wishList}>
                <MoviePage movie={movie} />
            </WishList.Provider>);
}

it('Makes sures the category modifier is not undefined', () => {
    expect(getCategoryModifier('ThisDoesNotExists')).toBe('');
    expect(getCategoryModifier('popular')).toBe(supportedCategoryModifiers.popular);
});


it('Tests the movie page component', () => {
    render(<TestApp />);

    screen.getByText('A Movie');
    screen.getByText('An Overview');

    function assertButtonText(text) {
        expect(screen.getByRole('button').textContent).toBe(text);
    }

    assertButtonText('Add to whislist');

    act(() => {
        fireEvent.click(screen.getByRole('button'));
    });

    assertButtonText('Remove from wishlist');
    

    act(() => {
        fireEvent.click(screen.getByRole('button'));
    });

    assertButtonText('Add to whislist');

});
