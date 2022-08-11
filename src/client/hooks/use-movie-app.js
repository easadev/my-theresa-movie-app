import { useState } from 'react';
import { useWishListManager } from './use-whishlist';


export function useMovieApp({ initialState }){
    const [state, setState] = useState({ ...initialState, wishList: {} });

    const wishList = useWishListManager(state.wishList, state => {
        setState(prevState => ({ ...prevState,  wishList: state }));
    });

    function setSelectedMovie(movie){
        setState(prevState => ({ ...prevState, selectedMovie: movie }));
    }


    return {
        wishList,
        selectedMovie: state.selectedMovie,
        categories: state.categories,
        setSelectedMovie
    };
}