import React from 'react';
import { useWishList } from '../../hooks/use-whishlist';
import { CarouselCategory } from '../../components/carousel-category.jsx';

export function WishListPage({ onMovieClicked }) {
    const { list } = useWishList();

    if (list.length === 0) {
        return <h2>Your Wish List is Empty</h2>
    }
    return <CarouselCategory name='My Wish List' movies={list} onCarouselMovieClicked={onMovieClicked} />;
}