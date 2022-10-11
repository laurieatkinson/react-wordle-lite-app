import { initializeBoard } from '../utils/word-helpers';
import LetterSquare, { LetterSquareStatus } from './LetterSquare';

interface GameBoardProps {
    secretWord: string;
    guessList: string[];
    inputWord: string;
}

export default function GameBoard(props: GameBoardProps) {
    const { secretWord, guessList, inputWord } = props;
    const theBoard = initializeBoard();

    return (
        <>
            {theBoard.map((row, rowIndex) => {
                return (
                    <div key={`row-${rowIndex}`} style={styles.row}>
                        {row.map((_, colIndex) => {
                            const guessLetter = guessList[rowIndex]?.[colIndex];
                            let status = LetterSquareStatus.EMPTY;
                            if (!guessLetter) {
                                status = LetterSquareStatus.EMPTY;
                            } else if (guessLetter === secretWord[colIndex]) {
                                status = LetterSquareStatus.CORRECT;
                            } else if (secretWord.includes(guessLetter)) {
                                status = LetterSquareStatus.WRONG_LOCATION;
                            } else {
                                status = LetterSquareStatus.INCORRECT;
                            }

                            const letterToShow =
                                rowIndex === guessList.length ? inputWord[colIndex] : guessLetter;

                            return (
                                <div style={{marginTop: 4}} key={`col-${colIndex}`}>
                                    <LetterSquare letter={letterToShow || ''} status={status} />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </>
    );
}

const styles = {
    row: {
        marginBottom: 4,
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'center',
    }
}