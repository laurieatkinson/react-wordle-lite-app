interface LetterSquareProps {
    secretWord: string;
    guessList: string[];
}

export default function GameCompleteDisplay(props: LetterSquareProps) {
    const { secretWord, guessList } = props;
    const hasWon = guessList[guessList.length - 1] === secretWord;
  
    let output = `${hasWon ? 'Congratulations!' : 'Better luck next time.'}\n\n`;
    output += `Wordle ${hasWon ? guessList.length : 'x'}/6\n\n`;

    guessList.forEach(row => {
        let line = '';
    
        row.split('').forEach((letter, index) => {
          if (letter === secretWord[index]) {
            line += '🟩';
          } else if (secretWord.includes(letter)) {
            line += '🟨';
          } else {
            line += '⬜';
          }
        });
    
        output += line + '\n';
    });

    return <>
        <p style={styles.message}>Game Over!</p>
        <p style={styles.message}>The word was : {secretWord}</p>
        <pre>{output}</pre>
    </>
}

const styles = {
    message: {
        color: '#fff',
        fontSize: 22,
        marginBottom: 12,
    }
}