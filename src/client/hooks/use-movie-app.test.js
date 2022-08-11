import { renderHook, act,  } from '@testing-library/react-hooks'
import { useMovieApp } from './use-movie-app';


it('Tests useMovieApp hook', () => {

    const { result } = renderHook(() => useMovieApp({ categories: [], selectedMovie: null }));

    const fakeMovie = { id: 1, title: 'A Movie' };
    expect(result.current.selectedMovie).toBeFalsy();
    act(() => {
        result.current.setSelectedMovie(fakeMovie);
    });

    expect(result.current.selectedMovie).toMatchObject(fakeMovie);

    act(() => {
        result.current.wishList.addMovieToWishList(fakeMovie);
    });

    expect(result.current.wishList.isMovieInWishList(fakeMovie)).toBe(true);
});