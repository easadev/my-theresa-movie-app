import React from 'react';
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

import { WishListPage } from './wish-list-page.jsx';
import { useWishListManager, WishList } from '../../hooks/use-whishlist'
import { useState } from 'react';


function WishListTest({ inititalList = [] }) {
    const [wishListState, setWishListState] = useState(inititalList);
    const wishList = useWishListManager(wishListState, setWishListState);
    const onMovieClicked = () => void 0;


    return <>
        <MemoryRouter>
            <WishList.Provider value={wishList}>
                <WishListPage onMovieClicked={onMovieClicked} />
            </WishList.Provider>
        </MemoryRouter>
    </>;
}

it('Tests wish list empty message', () => {
    render(<WishListTest inititalList={[]} />);
    expect(screen.findByText('Your Wish List is Empty')).toBeDefined();
});

it('Tests wish list (non empty)', () => {
    render(<WishListTest inititalList={[{ id: 1, title: 'A Movie' }]} />);
    const node = screen.queryByText('Your Wish List is Empty');
    expect(node).toBe(null);
});