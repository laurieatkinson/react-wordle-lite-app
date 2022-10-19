import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getSecretWord } from '../utils/word-helpers';
interface IGameState {
    wordList: string[];
    loading: boolean;
    errorMessage: string;
    secretWord: string;
    guessList: string[];
}
const initialState: IGameState = {
    wordList: [],
    loading: false,
    errorMessage: '',
    secretWord: '',
    guessList: []
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        requestStart: (state) => {
            state.loading = true;
            state.errorMessage = '';
        },
        clearGame: (state) => {
            state.loading = false;
            state.errorMessage = '';
            state.secretWord = '';
            state.guessList = [];
        },
        chooseSecretWord: (state) => {
            state.secretWord = getSecretWord(state.wordList);
        },
        updateGuessList: (state, action: PayloadAction<string>) => {
            state.guessList = [...state.guessList, action.payload];
        },
        getWordListSuccess: (state, action: PayloadAction<string[]>) => {
            state.errorMessage = '';
            state.wordList = action.payload || [];
            state.secretWord = getSecretWord(state.wordList);
            state.loading = false;
        },
        getWordListFailure: (state, action: PayloadAction<string>) => {
            state.errorMessage = action.payload;
            state.loading = false;
        }
    }
});

// Actions
export const {
    requestStart,
    clearGame,
    chooseSecretWord,
    updateGuessList,
    getWordListSuccess,
    getWordListFailure
} = gameSlice.actions;

// The function below is called a thunk and allows us to perform async logic.
// It can be dispatched like a regular action: `dispatch(getWordList())`.
// This will call the thunk with the `dispatch` function as the first argument.
// Async code can then be executed and other actions can be dispatched
export const getWordList = () => async (dispatch: any) => {
    dispatch(requestStart());
    await axios.get('word-list.json')
        .then(response => dispatch(getWordListSuccess(response.data)))
        .catch(error => {
            dispatch(getWordListFailure(error.message || 'Error occurred.'));
        });
}

export default gameSlice.reducer;
