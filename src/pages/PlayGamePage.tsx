import { Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GameBoard from '../components/GameBoard';
import GameCompleteDisplay from '../components/GameCompleteDisplay';
import Keyboard from '../components/Keyboard';
import { useGame } from '../redux/gameHooks';

export default function PlayGamePage() {
    const game = useGame();
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [inputWord, setInputWord] = useState<string>('');

    useEffect(() => {
        if (game.wordList.length === 0) {
            game.getWordList();
        }
    }, []);

    const onLetterSelected = (key: string) => {
        if (inputWord.length < 5) {
            setInputWord(`${inputWord}${key}`);
        }
    }

    const onDelete = () => {
        setInputWord(inputWord.slice(0, -1));
    }

    const onEnter = () => {
        if (inputWord.length === 5) {
            if (inputWord === game.secretWord || game.guessList.length === 5) {
                setGameOver(true);
            }
            game.guessAnotherWord(inputWord);
            setInputWord('');
        }
    }

    return (
        <div>
            <h1>Wordle Lite</h1>
            
            { game.loading ?
                <h4>Loading...</h4>
            : game.errorMessage ?
                <Alert severity="error">{game.errorMessage}</Alert>
            :
                <GameBoard secretWord={game.secretWord} guessList={game.guessList} inputWord={inputWord} />
            }

            <div style={styles.bottomContainer}>
                {gameOver ?
                    <GameCompleteDisplay secretWord={game.secretWord} guessList={game.guessList} />
                :
                <Keyboard onLetterSelected={onLetterSelected} onDelete={onDelete} onEnter={onEnter} />
                }
            </div>
            <Link to="/stats">View Stats</Link>
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
