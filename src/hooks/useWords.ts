import axios from "axios";
import { useEffect, useState } from "react";

export default function useWords() {
    const [wordList, setWordList] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const getData= async () => {
        setIsLoading(true);
        const wordList = await axios.get('word-list.json')
            .then(response => response.data)
            .catch(error => {
                setError(error.message || 'Error occurred.');
            });
        setWordList(wordList || []);
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    return {
        wordList,
        getData,
        isLoading,
        error
    }
}