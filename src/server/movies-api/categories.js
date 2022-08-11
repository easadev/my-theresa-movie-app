import { makeRequest } from './api'

const categoriesToFetch = [{
    name: 'Top Rated',
    code: 'top-rated',
    apiPath: 'movie/top_rated'
}, {
    name: 'Popular',
    code: 'popular',
    apiPath: 'movie/popular',
}, {
    name: 'Upcoming',
    code: 'upcoming',
    apiPath: 'movie/upcoming'
}];

export function withCategory(movieResult, category) {
    return movieResult.map(movie => ({ ...movie, category }));
}

export function getCategories() {
    const categoriesRequest = categoriesToFetch.map(category => {
        return makeRequest({ path: category.apiPath }).then((data) => ({ name: category.name, movies: withCategory(data.results, category.code) }));
    });
    return Promise.all(categoriesRequest);
}