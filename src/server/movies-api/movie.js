import { makeRequest } from './api';
export async function getMovie(movieId, category) {
    const apiMovie = await makeRequest({
        path: `movie/${movieId}`
    });
    return { ...apiMovie, category };
}