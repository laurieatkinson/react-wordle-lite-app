import GameBoard from '../components/GameBoard';
import GameCompleteDisplay from '../components/GameCompleteDisplay';
import Keyboard from '../components/Keyboard';
import { getSecretWord } from '../utils/word-helpers';

export default function PlayGamePage() {
    const allWords = ["small", "brave", "super", "large", "happy"];
    const secretWord = getSecretWord(allWords);
    let gameOver = false;
    let guessList: string[] = [];
    let inputWord = '';

    const onLetterSelected = (key: string) => {
        if (inputWord.length < 5) {
            inputWord = `${inputWord}${key}`;
        }
    }

    const onDelete = () => {
        inputWord = inputWord.slice(0, -1);
    }

    const onEnter = () => {
        if (inputWord.length === 5) {
            if (inputWord === secretWord || guessList.length === 5) {
                gameOver = true;
            }
            guessList = [...guessList, inputWord.toUpperCase()];
            inputWord = '';
        }
    }

    return (
        <div>
            <h1>Wordle Lite</h1>

            <GameBoard secretWord={secretWord} guessList={guessList} inputWord={inputWord} />

            <div style={styles.bottomContainer}>
                {gameOver ?
                    <GameCompleteDisplay secretWord={secretWord} guessList={guessList} />
                :
                <Keyboard onLetterSelected={onLetterSelected} onDelete={onDelete} onEnter={onEnter} />
                }
            </div>
        </div>
    );
};

const styles = {
    bottomContainer: {
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
};
