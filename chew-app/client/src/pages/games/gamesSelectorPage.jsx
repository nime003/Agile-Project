import React from "react";
import '../../css/gameSelectorPage.css';
import { useNavigate } from "react-router-dom";

const SelectGames = () => {
    const navigate = useNavigate();
    return (
        <div>
        <span class="title-container">
        <h1>Spill</h1>
        </span>
        <div onClick={() => navigate("/games/foodCultureGame")} class="games-container">
            <span class="select-game">
            <img src="/images/games/foodCultureGame/countryFoodImages/title.png" alt="Hvor i verden?"></img>
            <h3>Hvor i verden?</h3>
            </span>
        </div>
        </div>
    )
}
export default SelectGames;