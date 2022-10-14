import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useGame } from "../redux/gameHooks";

export default function StatsPage() {

    const game = useGame();
    
    return (
        <div>
            <h1>Wordle Lite</h1>
            <Button variant="contained">
                <Link to="/" style={{color: 'white'}}>Play</Link>
            </Button>
            <h4>My Stats</h4>
            <hr />
            <h5>Guesses so far</h5>
            {game.guessList.map(guess => {
                return (
                    <p>{guess}</p>
                )}
            )}
        </div>
    );
};