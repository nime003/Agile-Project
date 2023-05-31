import React, { useState } from "react";

//oppskrift til rett

const Oppskrift = () => {
    var hvetemel = 0.75;
    var salt = 0.13;
    var egg = 1;
    var smor = 0.25;

    return (
        <div>
            <h1>Pannekake oppskrift spill!</h1>
            <ol>
                <li>Bland mel og salt. Tilsett halvparten av melken.</li>
                <li>Visp sammen til en tykk og klumpfri røre.</li>
                <li>Tilsett resten av melken. Visp inn egg.</li>
                <li>La pannekakerøren svelle i ca. ½ time.</li>
                <li>Ikke spar på eggene i en pannekakerøre. Eggende binder røren, slik at du kan bruke mindre mel. Da blir det tynne og fine pannekaker.</li>
            </ol>
        </div>
    )
}

const Quiz = () => {
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleAnswer = (isCorrect) => {
        if(isCorrect) {
            setScore(prevScore => prevScore + 1);
        }
        setFinished(true);
    }
    return (
        <div>
            <h1>Pannekake Quiz</h1>
            <p>Hva er første steget i oppskriften?</p>
            <button onClick={() => handleAnswer(false)}>Bland melk og salt, tilsett klumpfri røre!</button>
            <button onClick={() => handleAnswer(true)}>Bland mel og salt. Tilsett halvparten av melken!</button>

            {finished && (score === 1 ?
            <p>Gratulerer, du kan nå gå å lage maten!</p> :
                <p>Du fikk et svar feil. Prøv igjen!</p>)}
        </div>
    )
}

const Pancake = () => {
    return (
        <div>
            <Oppskrift />
            <Quiz />
        </div>
    )
}

export default Pancake;