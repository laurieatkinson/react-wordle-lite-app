export function initializeBoard() {
    const board: string[][] = [];
    for (let i = 0; i < 6; i++) {
        board.push(['', '', '', '', '']);
    }
    return board;
}

export function getSecretWord(wordList: string[]) {
    const randomIndex = Math.floor(Math.random() * 100000) % wordList.length;
    return wordList[randomIndex].toUpperCase();
}