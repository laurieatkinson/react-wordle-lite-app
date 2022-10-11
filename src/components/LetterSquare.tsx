export enum LetterSquareStatus {
    EMPTY,
    CORRECT,
    WRONG_LOCATION,
    INCORRECT
}

const colors = ['transparent', '#76B041', '#FFC914', '#8B939C'];

interface LetterSquareProps {
    letter: string;
    status: LetterSquareStatus;
}

export default function LetterSquare(props: LetterSquareProps) {
    const { letter, status } = props;

    return (
        <div style={{ ...styles.container, backgroundColor: colors[status]}}>
          <p style={styles.text}>{letter.toUpperCase()}</p>
        </div>
    );
};

const styles = {
    container: {
        marginRight: 4,
        marginLeft: 4,
        width: 80,
        height: 80,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'grey',
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 40,
        marginTop: 30,
        fontWeight: 'bold',
    }
};
