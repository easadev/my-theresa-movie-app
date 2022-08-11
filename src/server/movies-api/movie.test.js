import { getMovie } from './movie';
import { makeRequest } from './api'

jest.mock('./api', () => {
    return {
        __esModule: true,
        makeRequest: jest.fn(() => Promise.resolve({ id: 1, title: 'A Movie ' }))
    };
});

it('Appends the category code to the movie object', async () => {
    const result = await getMovie(2, 'category-name');
    expect(result.category).toEqual('category-name');
    expect(makeRequest).toHaveBeenCalledWith({ path: 'movie/2' });
});