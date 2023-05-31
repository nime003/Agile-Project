import React, { useState } from "react";

export const PancakeQuiz = () => {
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const quiz = {
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

    const handleRestart = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
    }

    if (currentQuestionIndex >= quiz.totalQuestions) {
        return <div><h3>Du har fullført quizen, du fikk {score} ut av {quiz.totalQuestions}</h3>
            <button onClick={handleRestart}>Prøv på nytt!</button>
        </div>
    }

    const handleAnswer = (answer) => {
        if(answer === quiz.questions[currentQuestionIndex].correctAnswer) {
            setScore(prevScore => prevScore + 1);
        }
        setCurrentQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1);
    }

    return (
        <div>
            <h2>{quiz.questions[currentQuestionIndex].question}</h2>
            {quiz.questions[currentQuestionIndex].choices.map(choiceT => (<button onClick={() => handleAnswer(choiceT)}>{choiceT}</button>
            ))}
        </div>
    )
}

export default PancakeQuiz;