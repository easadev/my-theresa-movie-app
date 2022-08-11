import { wishListMovieReducer, addMovieAction, removeMovieAction } from './wish-list';

const oneMovie = { id: 1, title: 'A Movie' };
const anotherMovie = { id: 2, title: 'A Second Movie' };
it('Tests the wish list reducer', () => {

    const initialState = {};

    let resultingState = wishListMovieReducer(
        initialState,
        addMovieAction(oneMovie)
    );
    expect(resultingState).toMatchObject({ 1: oneMovie });
    resultingState = wishListMovieReducer(resultingState, { type: 'unkownAction' });
    expect(resultingState).toMatchObject({ 1: oneMovie });

    resultingState = wishListMovieReducer(resultingState, addMovieAction(anotherMovie));

    resultingState = wishListMovieReducer(resultingState, removeMovieAction(oneMovie));

    expect(resultingState).toMatchObject({ 2: anotherMovie });

})