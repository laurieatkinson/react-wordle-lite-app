export enum LetterSquareStatus {
    EMPTY,
    CORRECT,
    WRONG_LOCATION,
    INCORRECT
}

const colors = ['transparent', '#76B041', '#FFC914', '#8B939C'];

export default function LetterSquare() {

    return (
        <div style={{ ...styles.container, backgroundColor: colors[0] }}>
            <p style={styles.text}>X</p>
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
