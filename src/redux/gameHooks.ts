import { useSelector } from "react-redux";
import { chooseSecretWord, clearGame, getWordList, updateGuessList } from "./gameSlice";
import { RootState, useAppDispatch } from "./store";

export const useGame = () => {
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.game);
  return {
    ...state,
    clearGame: () => dispatch(clearGame()),
    chooseSecretWord: () => dispatch(chooseSecretWord()),
    guessAnotherWord: (word: string) => dispatch(updateGuessList(word)),
    getWordList: () => dispatch(getWordList())
  }
}