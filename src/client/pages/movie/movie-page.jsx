import React from 'react';
import { MoviePoster } from '../../components/movie-poster.jsx';
import { useWishList } from '../../hooks/use-whishlist';

export const supportedCategoryModifiers = {
    'popular': 'movie-page--alternate',
};

export function getCategoryModifier(category) {
    const modifier = supportedCategoryModifiers[category];
    return modifier || '';
}

export function MoviePage({ movie }){
    const wishList = useWishList();
    const isInWishList = wishList.isMovieInWishList(movie);
    function addToWishList() {
        wishList.addMovieToWishList(movie);
    }

    function removeFromWishList() {
        wishList.removeMovieFromWishList(movie);
    }

    const pageModifier = getCategoryModifier(movie.category);

    return <article className={`movie-page ${pageModifier}`}>
        <h1 className='movie-page__title'>{movie.title}</h1>
        <div className='movie-page__details'>
            <MoviePoster posterPath={movie.poster_path} size="w342" alt={movie.original_title} />
            <div>
                <summary className='movie-page__details-content'>{movie.overview}</summary>
                <div className='movie-page__details-actions'>
                    { !isInWishList && <button type='button' data-ui='action-button' className='button' onClick={addToWishList}>Add to whislist</button> }
                    { isInWishList && <button type='button' data-ui='action-button' className='button' onClick={removeFromWishList}>Remove from wishlist</button>}
                </div>
            </div>
        </div>
    </article>
}