interface KeyboardProps {
    onLetterSelected(letter: string): void;
    onEnter(): void;
    onDelete(): void;
}

export enum KeyboardActions {
    ENTER = 'ENTER',
    DELETE = 'DELETE'
}

const keyboardKeys: string[][] = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    [KeyboardActions.ENTER, 'Z', 'X', 'C', 'V', 'B', 'N', 'M', KeyboardActions.DELETE]
];

export default function Keyboard(props: KeyboardProps) {

    const onKeyPress = (key: string) => {
        switch(key) {
            case KeyboardActions.ENTER:
                props.onEnter();
                break;
            case KeyboardActions.DELETE:
                props.onDelete();
                break;
            default:
                props.onLetterSelected(key);
        }
    }

    return (
        <>
            {keyboardKeys.map((row, index) => {
                return (
                    <div key={'key-row-' + index} style={styles.row}>
                        {row.map(key => {
                            return (
                                <div onClick={() => onKeyPress(key)} key={key}
                                    style={{...styles.cell,
                                        width: key === KeyboardActions.ENTER || key === KeyboardActions.DELETE ? 80 : 50
                                    }}>
                                    <p style={styles.text}>
                                        {key}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </>
    );
};

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row' as 'row',
        marginBottom: 5,
    },
    cell: {
        width: 50,
        padding: 5,
        paddingHorizontal: 8,
        margin: 4,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#d3d6da'
    },
    text: {
        color: 'black',
        fontSize: 16,
    }
};
