import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import PancakeQuiz from "./pancakeQuiz";

//oppskrift til rett

const Oppskrift = () => {
    const [scale, setScale] = useState(1);

    const hvetemel = 0.75 * scale;
    const melk = 1.25 * scale;
    const salt = 0.13 * scale;
    const egg = 1 * scale;
    const smor = 0.25 * scale;


    const steps = [
        `Bland ${hvetemel}dl mel og ${salt}ts salt. Tilsett ${melk/2}dl melk.`,
        'Visp sammen til en tykk og klump-fri røre.',
        `Tilsett resten av melken (${melk/2}dl). Visp inn ${egg} egg.`,
        'La pannekakerøren svelle i ca. ½ time.',
        'Smelt smør eller margarin i en god og varm stekepanne.',
        'Hell i en øse med pannekakerøre og vend på pannen, slik at røren legger seg i et jevnt lag.',
        'Snu pannekaken når den har stivnet på oversiden og blitt gyllenbrun på undersiden.',
        'Når pannekaken er stekt på begge sider, brettes den sammen og legges i et ildfast fat med lokk. Pannekakene holder da varmen, slik at alle kan spise sammen.',
    ];



    const scaleUp = () => setScale(prevScale => prevScale + 1);
    const scaleDown = () => setScale(prevScale => prevScale > 1 ? prevScale -1 : 1);

    const [index, setIndex] = useState(0);
    const [quizStarted, setQuizStarted] = useState(false);


    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            {quizStarted ? (
                <div>
                    <PancakeQuiz />
                    <button onClick={() => setQuizStarted(false)}>Avslutt quiz</button>
                </div>
            ) : (
                <>
                    <h1>Pannekake oppskrift spill!</h1>
                    <h2>Denne oppskriften er for {2*scale}x pannekaker</h2>
                    <button onClick={scaleUp}>Øk antall pannekaker</button>
                    <button onClick={scaleDown}>Senk antall pannekaker</button>

                    <Carousel activeIndex={index} onSelect={handleSelect}
                              style={{width: "50%", margin: "auto"}}
                    >
                        {steps.map((step, index) => (
                            <Carousel.Item key={index}>
                                <Carousel.Caption style={{position: "static", background:"grey"}}>
                                    <div style={{textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black", fontSize: "2rem"}}>
                                        <h3>Steg {index + 1}</h3>
                                        <p style={{margin: "0 10% 2% 10%"}}>{step}</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    {index === steps.length - 1 && (
                        <button onClick={() => setQuizStarted(true)}>Start quizen!</button>
                    )}
                </>
            )}
        </div>
    );
}

const Pancake = () => {
    return (
        <div>
            <Oppskrift />
        </div>
    )
}

export default Pancake;