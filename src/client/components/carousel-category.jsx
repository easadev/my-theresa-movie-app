import React from 'react';
import { MoviePoster } from './movie-poster.jsx';
import { Link } from 'react-router-dom';


function MovieCard({ movie }) {
    return <article className='movie-card'>
        <div className='movie-card__poster'>
            <MoviePoster posterPath={movie.poster_path} size='w154' alt={movie.original_title} />
        </div>
        <div className='movie-card__title'>
            {movie.title}
        </div>
    </article>;
}

export function CarouselCategory({ name, movies, onCarouselMovieClicked }) {
    return (
        <>
            <div className='carousel'>
                <h2 className='carousel__name'>{name}</h2>
                <div className='carousel__movies-list'>
                    {movies.map((movie => {
                        return (
                            <div className='carousel__movie' key={movie.id}>
                                <Link to={`movie/${movie.id}`} onClick={(e => {
                                    e.preventDefault();
                                    onCarouselMovieClicked(movie);
                                })}>
                                    <MovieCard movie={movie} />
                                </Link>
                            </div>
                        )
                    }))}
                </div>
            </div>
        </>
    );
}