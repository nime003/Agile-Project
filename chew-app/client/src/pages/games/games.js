import {Link} from "react-router-dom";



export function GamesPage() {
    return (
        <div>
            <h1>Hello Games</h1>
            <Link to={"/games/pancake"}>Pannekake spill test</Link>
        </div>
    );
}