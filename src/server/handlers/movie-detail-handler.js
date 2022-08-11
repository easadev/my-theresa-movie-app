import { getMovie } from '../movies-api/movie';
import { getCategories } from '../movies-api/categories';
import { renderApp } from '../renderer.jsx';

export async function movieDetailHandler(request, reply){
    const { movieId, category } = request.params;
    const movie = await getMovie(movieId, category);
    const categories = await getCategories();

    reply.type('text/html').send(renderApp(request.url, { categories, selectedMovie: movie }));
}