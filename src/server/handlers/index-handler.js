import { getCategories  } from '../movies-api/categories';
import { renderApp  } from '../renderer.jsx';




export async function indexHandler(request, reply) {
    const categories = await getCategories();

    reply.type('text/html').send(renderApp(request.url, { categories, selectedMovie: null }));
}