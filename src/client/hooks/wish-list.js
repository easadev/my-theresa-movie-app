export const wishListActions = {
    ADD: 'add',
    REMOVE: 'remove'
}

export function addMovieAction(movie) {
    return {
        type: wishListActions.ADD,
        payload: movie
    };
}

export function removeMovieAction(movie) {
    return {
        type: wishListActions.REMOVE,
        payload: movie,
    };
}

export function wishListMovieReducer(wishList = {}, action) {
    const movie = action.payload;
    switch(action.type) {
        case wishListActions.ADD:
            return {
                ...wishList,
                [movie.id]: movie,
            }
        case wishListActions.REMOVE:
            const { [movie.id]: movieToDrop, ...leftMovies } = wishList;
            return leftMovies;
        default:
            return wishList
    };

}