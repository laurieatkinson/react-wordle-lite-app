export default function GameCompleteDisplay() {
    const hasWon = false;
  
    let output = `${hasWon ? 'Congratulations!' : 'Better luck next time.'}\n\n`;
    output += `Wordle 0/6\n\n`;
  
    return <>
        <p style={styles.message}>Game Over!</p>
        <p style={styles.message}>The word was : </p>
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