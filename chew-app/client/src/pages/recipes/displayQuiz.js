import React, {useState} from "react";
import {Button, Modal, Typography} from "@mui/material";
import {Box} from "@mui/system";

export function DisplayQuiz ({selectedRecipe, openQuizModal, setOpenQuizModal}) {
    let quiz = selectedRecipe.quiz;
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleClose = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setOpenQuizModal(false);
    }

    const handleRestart = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
    }

    const handleAnswer = (answer) => {
        if (answer === quiz.questions[currentQuestionIndex].correctAnswer) {
            setScore(prevScore => prevScore + 1);
        }
        if (currentQuestionIndex !== quiz.questions.length) {
            setCurrentQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1);
        } else {

        }
    }

    return (
        <Modal
            open={openQuizModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: '#ff5b2e',
                    color: '#ffffff',
                    p: 4,
                    m: 2,
                    borderRadius: 2,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            >
                {currentQuestionIndex !== quiz.questions.length ?
                    (
                        <Box>
                            <Typography
                                variant="h4"
                                sx={{
                                    textShadow: `-1px -1px 0 #000,
                                1px -1px 0 #000,
                                -1px  1px 0 #000,
                                1px  1px 0 #000`
                                }}
                            >{quiz.questions[currentQuestionIndex].question}</Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly',
                                    justifyItems: 'space-evenly',
                                    alignItems: 'center',
                                    height: '80%',
                                    mt: 2,
                                }}
                            >
                                {quiz.questions[currentQuestionIndex].choices.map(choiceT => (
                                    <Button key={`${choiceT}`}
                                            variant="contained"
                                            sx={{width: '50%', mt: 1, bgcolor: '#FFFFFF', color: '#000000'}}
                                            onClick={() => handleAnswer(choiceT)}>{choiceT}</Button>
                                ))}
                            </Box>
                        </Box>
                    )
                    :
                    <Typography>du fikk {score} av {quiz.questions.length} riktig!</Typography>}
            </Box>
        </Modal>
    )
}
