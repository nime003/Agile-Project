import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayQuiz from "./displayQuiz";

const recipes = [
    {
        name: "Pannekaker",
        portionSize: 2,
        ingredients: [
            {
                name: "Hvetemel",
                amount: 0.75,
                unit: "dl"
            },
            {
                name: "Melk",
                amount: 1.25,
                unit: "dl"
            },
            {
                name: "Salt",
                amount: 0.13,
                unit: "ts"
            },
            {
                name: "Egg",
                amount: 1,
                unit: ""
            },
            {
                name: "Smør",
                amount: 0.25,
                unit: "dl"
            }
        ],
        steps: [
            `Bland {Hvetemel} og {Salt}. Tilsett halvparten av melken.`,
            'Visp sammen til en tykk og klump-fri røre.',
            `Tilsett resten av melken. Visp inn {Egg}.`,
            'La pannekakerøren svelle i ca. ½ time.',
            'Smelt smør eller margarin i en god og varm stekepanne.',
            'Hell i en øse med pannekakerøre og vend på pannen, slik at røren legger seg i et jevnt lag.',
            'Snu pannekaken når den har stivnet på oversiden og blitt gyllenbrun på undersiden.',
            'Når pannekaken er stekt på begge sider, brettes den sammen og legges i et ildfast fat med lokk. Pannekakene holder da varmen, slik at alle kan spise sammen.',
        ],
        quiz: {
            topic: 'Pannekake oppskrift',
            level: 'Enkel',
            totalQuestions: 4,
            questions: [
                {
                    question: 'Hva er første steget i oppskriften?',
                    choices: ['Bland melk og salt., tilsett klump-fri røre.', 'Bland mel og salt, tilsett halvparten av melken.', 'Ingen av alternativene.'],
                    type: 'MCQs',
                    correctAnswer: 'Bland mel og salt, tilsett halvparten av melken.',
                },

                {
                    // Smelt smør eller margarin i en god og varm stekepanne.
                    // Hell i en øse med pannekakerøre og vend på pannen, slik at røren legger seg i et jevnt lag.
                    // Snu pannekaken når den har stivnet på oversiden og blitt gyllenbrun på undersiden.
                    question: 'Hvordan skal man helle røren i pannen?',
                    choices: ['Rett i og vente.', 'Helle i og vende på pannen slik at røren er gjevn.', 'Bruke vann i pannen og dyppe den i røren.', 'Ingen av alternativene.'],
                    type: 'MCQs',
                    correctAnswer: 'Helle i og vende på pannen slik at røren er gjevn.',
                },
                {
                    // Når pannekaken er stekt på begge sider, brettes den sammen og legges i et ildfast fat med lokk. Pannekakene holder da varmen, slik at alle kan spise sammen.
                    question:
                        'Hvordan burde man lagre pannekaken når de er ferdigstekt?',
                    choices: ['I kjøleskapet.', 'På et varmt gulv.', 'Ute i sola.', 'Ingen av alternativene.'],
                    type: 'MCQs',
                    correctAnswer: 'Ingen av alternativene.',
                },
                {
                    // La pannekakerøren svelle i ca. ½ time.
                    question:
                        'Hvor lenge skal pannekakerøren svelle?',
                    choices: ['1 time.', '1 minutt.', '30 minutter.', 'Ingen av alternativene.'],
                    type: 'MCQs',
                    correctAnswer: '30 minutter.',
                }
            ],
        }
    },
    {
        name: "Vaffler",
        portionSize: 10,
        ingredients: [
            {
                name: "Hvetemel",
                amount: 4,
                unit: "dl"
            },
            {
                name: "Melk",
                amount: 4,
                unit: "dl"

            },
            {
                name: "Salt",
                amount: 0.5,
                unit: "ts"

            },
            {
                name: "Egg",
                amount: 3,
                unit: ""
            },
            {
                name: "Smør",
                amount: 1,
                unit: "dl"
            },
            {
                name: "Sukker",
                amount: 1,
                unit: "dl"
            },
            {
                name: "Vaniljesukker",
                amount: 2,
                unit: "ts"
            },
        ],
        steps: [
            "Bland {Hvetemel}, {Salt}, {Sukker} og {Vaniljesukker} i en bolle.",
            "Spe melken sakte inn og rør godt slik at du får en glatt røre.",
            "La vaffelrøren svelle i ca. ½ time.",
            "Smelt smør eller margarin i en god og varm vaffeljern.",
            "Hell i en øse med vaffelrøre og vend på vaffeljernet, slik at røren legger seg i et jevnt lag.",
            "Når vaffelen har stivnet på oversiden og blitt gyllenbrun på undersiden, er den ferdig.",
            "Når vaffelen er stekt på begge sider, brettes den sammen og legges i et ildfast fat med lokk. Vaffelene holder da varmen, slik at alle kan spise sammen.",
            "Serveres med syltetøy, rømme, brunost eller sukker.",

        ],
        //quiz til vafler
        quiz: {

        }
    },
    {
        name: "Potetmos",
        portionSize: 4,
        ingredients: [
            {
                name: "Poteter",
                amount: 1,
                unit: "kg"
            },
            {
                name: "Salt",
                amount: 2,
                unit: "ts"
            }
        ],
        steps: [
            "{Poteter}",
            "{Salt}",
            "samplestep pomos 3",
        ],
        //potetmos quiz
        quiz: {

        }
    }
];

const DynamiskOppskrift = () => {

    const switchRecipe = () => {
        const newRecipeIndex = (recipeIndex + 1) % recipes.length;
        setRecipeIndex(newRecipeIndex);
        setSelectedRecipe(recipes[newRecipeIndex]);
        setCarouselIndex(0);
    }

    const [scale, setScale] = useState(1);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [quizStarted, setQuizStarted] = useState(false);
    const [recipeIndex, setRecipeIndex] = useState(0);
    const [dynamicSteps, setDynamicSteps] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(recipes[recipeIndex]);
    const [checkedIngredients, setCheckedIngredients] = useState(
        Object.fromEntries(
            recipes.map(recipe =>
                recipe.ingredients.map(ingredient => [ingredient.name, false])
            ).flat()
        )
    );


    const scaleUp = () => setScale(prevScale => prevScale + 1);
    const scaleDown = () => setScale(prevScale => prevScale > 1 ? prevScale -1 : 1);

    useEffect(() => {
        setDynamicSteps(selectedRecipe.steps.map(step =>
            step.replace(/{(.*?)}/g, (match) => {
                const ingredientName = match.slice(1,-1); //retrieves ingredient name
                for(const ingredient of selectedRecipe.ingredients) {
                    if(ingredient.name === ingredientName) {
                        return ingredient.amount * scale + ingredient.unit + " " + ingredient.name.toLowerCase();
                    }
                }
            })
        ));
    }, [selectedRecipe, scale]);

    useEffect(() => {
        const newCheckedIngredients = {};
        selectedRecipe.ingredients.forEach((ingredient) => {
            newCheckedIngredients[ingredient.name] = false;
        })
        setCheckedIngredients(newCheckedIngredients)
        // const ingredientKeys = Object.keys(selectedRecipe.ingredients);
        // const newCheckedIngredients = {};
        // ingredientKeys.forEach((key) => {
        //     newCheckedIngredients[key] = false;
        // });
        // setCheckedIngredients(newCheckedIngredients);
    }, [selectedRecipe, scale]);

    const handleCheckOff = (ingredient) => {
        setCheckedIngredients(prev => ({ ...prev, [ingredient]: !prev[ingredient]}));
    };


    const handleSelect = (selectedIndex) => {
        setCarouselIndex(selectedIndex);
    };

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", margin: "10px"}}>
                {recipes.map((recipe, index) =>(
                    <button
                        key={index}
                        onClick={() => {
                            setSelectedRecipe(recipe);
                            setRecipeIndex(index);
                        }}
                        style={{
                            margin: "10px",
                            backgroundColor: recipeIndex === index ? "lightblue" : "white"
                        }}
                    >{recipe.name}</button>
                ))}
            </div>
            {quizStarted ? (
                <div>
                    <DisplayQuiz />
                    <button onClick={() => setQuizStarted(false)}>Avslutt quiz</button>
                </div>
            ) : (
                <div>
                    <h1>{selectedRecipe.name} oppskrift spill!</h1>
                    <h2>Denne oppskriften er for {selectedRecipe.portionSize * scale}x {selectedRecipe.name}</h2>

                    <button onClick={scaleUp}>Øk antall porsjoner</button>
                    <button onClick={scaleDown}>Senk antall porsjoner</button>
                    <button onClick={switchRecipe}>Bla gjennom oppskrifter></button>
                    <h2>Ingredienser som trengs:</h2>
                    <ul>
                        {Object.keys(selectedRecipe.ingredients).map((ingredient, index) =>(
                            <li key={index}>
                                <input
                                    type={"checkbox"}
                                    checked={checkedIngredients[ingredient] || false}
                                    onChange={() => handleCheckOff(ingredient)}
                                />
                                {selectedRecipe.ingredients[ingredient].name}: {selectedRecipe.ingredients[ingredient].amount * scale} {selectedRecipe.ingredients[ingredient].unit}
                            </li>
                        ))}
                    </ul>

                    <Carousel activeIndex={carouselIndex} onSelect={handleSelect}
                              style={{width: "50%", margin: "auto"}}
                    >
                        {dynamicSteps.map((step, index) => (
                            <Carousel.Item key={index}>
                                <Carousel.Caption style={{position: "static", background:"#ff5b2e"}}>
                                    <div style={{textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black", fontSize: "2rem"}}>
                                        <h3>Steg {index + 1}</h3>
                                        <p style={{margin: "0 10% 2% 10%"}}>{step}</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    {carouselIndex === dynamicSteps.length - 1 && (
                        <button onClick={() => setQuizStarted(true)}>Start quizen!</button>
                    )}
                </div>
            )}
        </div>
    );
}

const DisplayRecipe = () => {
    return (
        <div>
            <DynamiskOppskrift />
        </div>
    )
}

export default DisplayRecipe;


// const [scale, setScale] = useState(1);
//
// const hvetemel = 0.75 * scale;
// const melk = 1.25 * scale;
// const salt = 0.13 * scale;
// const egg = 1 * scale;
// const smor = 0.25 * scale;
//
//
// const steps = [
//     `Bland ${hvetemel}dl mel og ${salt}ts salt. Tilsett ${melk/2}dl melk.`,
//     'Visp sammen til en tykk og klump-fri røre.',
//     `Tilsett resten av melken (${melk/2}dl). Visp inn ${egg} egg.`,
//     'La pannekakerøren svelle i ca. ½ time.',
//     'Smelt smør eller margarin i en god og varm stekepanne.',
//     'Hell i en øse med pannekakerøre og vend på pannen, slik at røren legger seg i et jevnt lag.',
//     'Snu pannekaken når den har stivnet på oversiden og blitt gyllenbrun på undersiden.',
//     'Når pannekaken er stekt på begge sider, brettes den sammen og legges i et ildfast fat med lokk. Pannekakene holder da varmen, slik at alle kan spise sammen.',
// ];
//
// const scaleUp = () => setScale(prevScale => prevScale + 1);
// const scaleDown = () => setScale(prevScale => prevScale > 1 ? prevScale -1 : 1);


//
// const testOppskrift = {
//     name: "Pannekaker",
//     scale: 1,
//     ingredients: {
//         hvetemel: 0.75,
//         melk: 1.25,
//         salt: 0.13,
//         egg: 1,
//         smor: 0.25,
//     },
//     steps: [
//         `Bland `+ this.ingredients.hvetemel + `dl mel og ts salt. Tilsett dl melk.`,
//         'Visp sammen til en tykk og klump-fri røre.',
//         //`Tilsett resten av melken (${this.melk/2}dl). Visp inn ${(this.egg)} egg.`,
//         'La pannekakerøren svelle i ca. ½ time.',
//         'Smelt smør eller margarin i en god og varm stekepanne.',
//         'Hell i en øse med pannekakerøre og vend på pannen, slik at røren legger seg i et jevnt lag.',
//         'Snu pannekaken når den har stivnet på oversiden og blitt gyllenbrun på undersiden.',
//         'Når pannekaken er stekt på begge sider, brettes den sammen og legges i et ildfast fat med lokk. Pannekakene holder da varmen, slik at alle kan spise sammen.',
//     ],
//     /*
//     quiz: {
//         topic: 'Pannekake oppskrift',
//         level: 'Enkel',
//         totalQuestions: 4,
//         questions: [
//             {
//                 question: 'Hva er første steget i oppskriften?',
//                 choices: ['Bland melk og salt., tilsett klump-fri røre.', 'Bland mel og salt, tilsett halvparten av melken.', 'Ingen av alternativene.'],
//                 type: 'MCQs',
//                 correctAnswer: 'Bland mel og salt, tilsett halvparten av melken.',
//             },
//
//             {
//                 // Smelt smør eller margarin i en god og varm stekepanne.
//                 // Hell i en øse med pannekakerøre og vend på pannen, slik at røren legger seg i et jevnt lag.
//                 // Snu pannekaken når den har stivnet på oversiden og blitt gyllenbrun på undersiden.
//                 question: 'Hvordan skal man helle røren i pannen?',
//                 choices: ['Rett i og vente.', 'Helle i og vende på pannen slik at røren er gjevn.', 'Bruke vann i pannen og dyppe den i røren.', 'Ingen av alternativene.'],
//                 type: 'MCQs',
//                 correctAnswer: 'Helle i og vende på pannen slik at røren er gjevn.',
//             },
//             {
//                 // Når pannekaken er stekt på begge sider, brettes den sammen og legges i et ildfast fat med lokk. Pannekakene holder da varmen, slik at alle kan spise sammen.
//                 question:
//                     'Hvordan burde man lagre pannekaken når de er ferdigstekt?',
//                 choices: ['I kjøleskapet.', 'På et varmt gulv.', 'Ute i sola.', 'Ingen av alternativene.'],
//                 type: 'MCQs',
//                 correctAnswer: 'Ingen av alternativene.',
//             },
//             {
//                 // La pannekakerøren svelle i ca. ½ time.
//                 question:
//                     'Hvor lenge skal pannekakerøren svelle?',
//                 choices: ['1 time.', '1 minutt.', '30 minutter.', 'Ingen av alternativene.'],
//                 type: 'MCQs',
//                 correctAnswer: '30 minutter.',
//             }
//         ],
//     }
//      */
// }
//
//
// /*
// const scaleUp = () => testOppskrift.scale += 1;
// const scaleDown = () => testOppskrift.scale > 1 ? testOppskrift.scale -= 1 : 1;
// */

// const [index, setIndex] = useState(0);
// const [quizStarted, setQuizStarted] = useState(false);