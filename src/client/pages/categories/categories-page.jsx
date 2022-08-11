import React from 'react';
import { CarouselCategory } from '../../components/carousel-category.jsx';

export function CategoriesPage({ categories, onMovieClicked }) {
    return (
        <>
            {
                categories.map((category, index) => {
                    return <CarouselCategory
                        movies={category.movies}
                        name={category.name}
                        key={index}
                        onCarouselMovieClicked={onMovieClicked} />
                })
            }
        </>);
}