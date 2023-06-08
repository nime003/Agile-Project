import React, { useState, useEffect } from "react";
import {Button, Checkbox, FormControlLabel, List, ListItem, Modal, Typography} from "@mui/material";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Box} from "@mui/system";
import {DisplayQuiz} from "./displayQuiz";

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
        name: "Vafler",
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
            topic: 'Vaffel Oppskrift',
            level: 'Enkel',
            totalQuestions: 4,
            questions: [
                {
                    question: 'Hva er første steget i oppskriften?',
                    choices: ['Bland Hvetemel, salt, sukker og vaniljesukker.', 'Bland mel og salt, tilsett halvparten av melken.', 'Ingen av alternativene.'],
                    type: 'MCQs',
                    correctAnswer: 'Bland Hvetemel, salt, sukker og vaniljesukker.',
                },

                {

                    question: 'Hvordan får man en glatt røre?',
                    choices: ['Bruke smoothieblender.', 'Spe melken sakte inn og rør godt slik at du får en glatt røre.', 'Man kan ikke få en glatt røre.', 'Ingen av alternativene.'],
                    type: 'MCQs',
                    correctAnswer: 'Spe melken sakte inn og rør godt slik at du får en glatt røre.',
                },
                {

                    question: 'Hvordan tilbereder man vaffeljernet?',
                    choices: ['I ovnen.', 'På et varmt gulv.', 'Med smør eller margarin.', 'Ingen av alternativene.'],
                    type: 'MCQs',
                    correctAnswer: 'Med smør eller margarin.',
                },
                {

                    question: 'Hva kan du servere vaffelen med?',
                    choices: ['Gulost, salat og hamburgerdressing.', 'Motorolje.', 'grus og blader.', 'Ingen av alternativene.'],
                    type: 'MCQs',
                    correctAnswer: 'Ingen av alternativene.',
                }
            ],
        }
    },
    {
        name: "Potetmos",
        portionSize: 4,
        ingredients: [
            {
                name: "Poteter",
                amount: 10,
                unit: "stk"
            },
            {
                name: "Salt",
                amount: 2,
                unit: "ts"
            },
            {
                name: "Melk",
                amount: 2,
                unit: "dl"
            },
            {
                name: "Smør",
                amount: 2,
                unit: "ss"
            },
            {
                name: "Pepper",
                amount: 0.5,
                unit: "ts"
            },
            {
                name: "Revet muskatnøtt",
                amount: 0.25,
                unit: "ts"
            }
        ],
        steps: [
            "Skrell {Poteter} og kok dem møre, uten salt i vannet. Hell av vannet.",
            "Varm opp {Melk} til rett under kokepunktet",
            "Mos potetene og rør inn smør. Ha i litt og litt varm melk av gangen. Rør godt underveis.",
            "Smak til med salt, pepper og muskat.",
        ],
        //potetmos quiz
        quiz: {
            topic: 'Potetmos oppskrift',
            level: 'Enkel',
            totalQuestions: 3,
            questions: [
                {
                    question: 'Hva er første steget i oppskriften?',
                    choices: ['Bland muskattnøtt og salt for en god kryddermiks.', 'Skrell poteter og kok dem møre, uten salt i vannet. Hell av vannet.', 'Ingen av alternativene.'],
                    type: 'MCQs',
                    correctAnswer: 'Skrell poteter og kok dem møre, uten salt i vannet. Hell av vannet.',
                },

                {

                    question: 'Hvordan skal melken tilberedes?',
                    choices: ['Varmes opp til rett under kokepunktet.', 'Kald i målebeger.', 'Ingen av alternativene.'],
                    type: 'MCQs',
                    correctAnswer: 'Varmes opp til rett under kokepunktet.',
                },
                {

                    question: 'Hvordan krydrer man potetmosen?',
                    choices: ['Med krydderet som står i oppskriften.', 'Prøver seg fram med litt og litt av krydderet i oppskriften.', 'Ingen av alternativene.'],
                    type: 'MCQs',
                    correctAnswer: 'Prøver seg fram med litt og litt av krydderet i oppskriften.',
                }
            ],
        }
    }
];



const DynamiskOppskrift = () => {

    const [scale, setScale] = useState(1);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [quizStarted, setQuizStarted] = useState(false);
    const [recipeIndex, setRecipeIndex] = useState(1);
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
    }, [selectedRecipe, scale]);

    const handleCheckOff = (ingredient) => {
        setCheckedIngredients(prev => ({ ...prev, [ingredient]: !prev[ingredient]}));
    };


    const handleSelect = (selectedIndex) => {
        setCarouselIndex(selectedIndex);
    };

    const [openQuizModal, setOpenQuizModal] = React.useState(false);

    function handleOpenQuiz() {
        setOpenQuizModal(true);
    }

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", margin: "10px"}}>
                {recipes.map((recipe, index) =>(
                    <Button
                        key={index}
                        onClick={() => {
                            setSelectedRecipe(recipe);
                            setRecipeIndex(index);
                            setCarouselIndex(0);
                            setQuizStarted(false);
                        }}
                        style={{
                            margin: "10px",
                            backgroundColor: recipeIndex === index ? "lightblue" : "white"
                        }}
                    >{recipe.name}</Button>
                ))}
            </div>
                <div>
                    <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <Typography variant="h2">{selectedRecipe.name} oppskrift!</Typography>
                        <Typography variant="h4">Denne oppskriften er for {selectedRecipe.portionSize * scale}x {selectedRecipe.name}</Typography>

                        <Box
                            flexDirection="row"
                        >
                            <Button onClick={scaleUp} >Øk antall porsjoner</Button>
                            <Button onClick={scaleDown}>Senk antall porsjoner</Button>
                        </Box>
                        <Typography variant="h4">Ingredienser som trengs:</Typography>
                        <List>
                            {Object.keys(selectedRecipe.ingredients).map((ingredient, index) =>(
                                <ListItem key={index}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            checked={checkedIngredients[ingredient] || false}
                                            onChange={() => handleCheckOff(ingredient)}
                                        />}
                                        label={`
                                    ${selectedRecipe.ingredients[ingredient].name}: ${selectedRecipe.ingredients[ingredient].amount * scale} ${selectedRecipe.ingredients[ingredient].unit}
                                 `}/>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Box sx={{width: "50%", margin: "auto", background: "#ff5b2e"}}>
                        <Carousel
                            showThumbs={false}
                            dynamicHeight={false}
                            selectedItem={carouselIndex}
                            onChange={handleSelect}
                        >
                            {dynamicSteps.map((step, index) => (
                                <div key={index} >
                                    <div style={{position: "static", paddingBottom: "2rem"}}>
                                        <Typography variant="h3">Steg {index + 1}</Typography>
                                        <Typography variant="body1" style={{margin: "0 2rem 0 2rem"}}>{step}</Typography>
                                    </div>
                                </div>
                            ))}

                            <div key={dynamicSteps.length + 1}>
                                <div style={{position: "static", height: "100%"}}>
                                    <Typography variant="h3">
                                        <Button
                                            style={{margin: "0 10% 2% 10%"}}
                                            onClick={handleOpenQuiz}
                                        >
                                            Start quizen!
                                        </Button>
                                    </Typography>
                                </div>
                            </div>
                        </Carousel>
                    </Box>
                </div>
            <DisplayQuiz selectedRecipe={selectedRecipe} openQuizModal={openQuizModal} setOpenQuizModal={setOpenQuizModal}/>
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
