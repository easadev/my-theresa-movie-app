import { createContext, useContext } from 'react';
import { wishListMovieReducer, wishListActions } from './wish-list';

export const WishList = createContext({
    isMovieInWishList(_movie) { return false },
    addMovieToWishList(_movie) { },
    removeMovieFromWishList(_movie) { },
    list: [],
});

export function useWishList() {
    return useContext(WishList);
}

export function toList(wishListState) {
    return Object.keys(wishListState).map(movieId => wishListState[movieId]);
}

export function useWishListManager(wishListState, setWishList) {

    function _setWishListSlice(action) {
        const state = wishListMovieReducer(wishListState, action);
        setWishList(state);
    }

    function addMovieToWishList(movie) {
        const action = {
            type: wishListActions.ADD,
            payload: movie
        };
        _setWishListSlice(action);
    }

    function removeMovieFromWishList(movie) {
        const action = {
            type: wishListActions.REMOVE,
            payload: movie
        }
        _setWishListSlice(action);
    }

    function isMovieInWishList(movie) {
        return movie.id in wishListState;
    }

    return {
        addMovieToWishList,
        removeMovieFromWishList,
        isMovieInWishList,
        list: toList(wishListState),
    }
}