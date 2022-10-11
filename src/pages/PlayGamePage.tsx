import GameBoard from '../components/GameBoard';
import GameCompleteDisplay from '../components/GameCompleteDisplay';
import Keyboard from '../components/Keyboard';
import { getSecretWord } from '../utils/word-helpers';

export default function PlayGamePage() {
    const allWords = ["small", "brave", "super", "large", "happy"];
    const secretWord = getSecretWord(allWords);
    let gameOver = false;

    return (
        <div>
            <h1>Wordle Lite</h1>

            <GameBoard />

            <div style={styles.bottomContainer}>
                {gameOver ?
                    <GameCompleteDisplay />
                :
                    <Keyboard />
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
