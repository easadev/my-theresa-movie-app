import React from 'react';

export function MoviePoster({ posterPath, size, alt = '' }) {
    return  <img loading='lazy' src={`http://image.tmdb.org/t/p/${size}/${posterPath}`} alt={alt}></img>
}
