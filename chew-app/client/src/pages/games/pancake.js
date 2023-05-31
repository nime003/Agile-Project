import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import PancakeQuiz from "./pancakeQuiz";

//oppskrift til rett

const Oppskrift = () => {
    var hvetemel = 0.75;
    var salt = 0.13;
    var egg = 1;
    var smor = 0.25;

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

                    <p>Random bilder for nå</p>

                    <Carousel activeIndex={index} onSelect={handleSelect}
                              style={{width: "50%"}}
                    >
                        {steps.map((step, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src= {`https://picsum.photos/800/400?text=${index + 1}`}
                                    alt={"flexgiun"}
                                />
                                <Carousel.Caption>
                                    <div style={{textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>
                                        <h3>Steg {index + 1}</h3>
                                        <p>{step}</p>
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