import { initializeBoard } from '../utils/word-helpers';
import LetterSquare from './LetterSquare';

export default function GameBoard() {
    const theBoard = initializeBoard();

    return (
        <>
            {theBoard.map((row, rowIndex) => {
                return (
                    <div key={`row-${rowIndex}`} style={styles.row}>
                        {row.map((_, colIndex) => {
                            return (
                                <div style={{marginTop: 4}} key={`col-${colIndex}`}>
                                    <LetterSquare />
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