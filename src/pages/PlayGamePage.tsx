import { useState } from 'react';
import GameBoard from '../components/GameBoard';
import GameCompleteDisplay from '../components/GameCompleteDisplay';
import Keyboard from '../components/Keyboard';
import { getSecretWord } from '../utils/word-helpers';

export default function PlayGamePage() {
    const allWords = ["small", "brave", "super", "large", "happy"];
    const [secretWord, setSecretWord] = useState(getSecretWord(allWords));
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [guessList, setGuessList] = useState<string[]>([]);
    const [inputWord, setInputWord] = useState<string>('');

    const onLetterSelected = (key: string) => {
        if (inputWord.length < 5) {
            setInputWord(`${inputWord}${key}`);
        }
        // setInputWord(word => {
        //     if (word.length < 5) {
        //         return `${word}${key}`;
        //     }
        //     return word;
        // });
    }

    const onDelete = () => {
        setInputWord(inputWord.slice(0, -1));
        // setInputWord(word => word.slice(0, -1));
    }

    const onEnter = () => {
        if (inputWord.length === 5) {
            if (inputWord === secretWord || guessList.length === 5) {
                setGameOver(true);
            }
            setGuessList([...guessList, inputWord]);
            // setGuessList(list => [...list, inputWord]);
            setInputWord('');
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
