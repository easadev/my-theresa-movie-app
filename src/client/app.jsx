import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useMovieApp } from './hooks/use-movie-app';
import { MoviePage } from './pages/movie/movie-page.jsx';
import { WishListPage } from './pages/wish-list/wish-list-page.jsx';
import { CategoriesPage } from './pages/categories/categories-page.jsx';
import { Header } from './header.jsx';
import { WishList } from './hooks/use-whishlist';



export function MovieApp({ initialState }) {
    const {
        selectedMovie,
        categories,
        wishList,
        setSelectedMovie,
    } = useMovieApp({ initialState });
    const navigate = useNavigate();
    function onMovieClicked(movie) {
        setSelectedMovie(movie);
        navigate(`category/${movie.category}/${movie.id}`);
    }
    return (
        <>
        <WishList.Provider value={wishList}>
            <Header />
            <main>        
                <Routes>
                    <Route path='/'>
                        <Route index element={<CategoriesPage categories={categories} onMovieClicked={onMovieClicked} />} ></Route>
                        <Route path='/category/:category/:movieId' element={<MoviePage movie={selectedMovie} />} />
                        <Route path='/wish-list' element={<WishListPage onMovieClicked={onMovieClicked} />}></Route>
                    </Route>
                </Routes>
            </main>
        </WishList.Provider>
        </>
    )
}
