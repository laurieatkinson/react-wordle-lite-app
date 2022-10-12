import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function StatsPage() {

    return (
        <div>
            <h1>Wordle Lite</h1>
            <Button variant="contained">
                <Link to="/" style={{color: 'white'}}>Play</Link>
            </Button>
            <h4>My Stats</h4>
        </div>
    );
};