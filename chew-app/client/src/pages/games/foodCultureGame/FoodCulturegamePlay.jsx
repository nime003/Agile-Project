import React from "react";
import SelectFlag from './selectFlag'
import { useState, useEffect } from "react";
import {data} from './fakeData/countryData';
import Toast from 'react-bootstrap/Toast';
import '../../../css/foodCountryGamePlay.css'


const FoodCulturegameSection = ({handleExperiencePoints}) => {
    const countryData = data;
    const selectedCountryFlag = async (selectedFlagObject) => {
        const {country} = selectedFlagObject;
        const correctAnswerId = question.flagQuesstionId;
        if(country === correctAnswerId){
            setQuestionAnswer(true)
            setTimeout(() => {
                setQuestionAnswer(false);
                getRandomCountries();
            },1000)
            await handleExperiencePoints(2)
            // resett handler
           await handleExperiencePoints(0)
        } else {
            setWrongAnswer(true)
            setTimeout(() => {
                setWrongAnswer(false);
            },1000)
        }
    }
    const getRandomCountries = () => {
        const allCountries = countryData;
        let countriesForGameBoard = [];
        for(let i = 0; i < 4; i++){
            //remove already selected countries
            let addedCountryIds = countriesForGameBoard.map((c) => c?.country) ?? [];
            const countriesWithoutDuplicates = allCountries.filter((c)=> !addedCountryIds.includes(c?.country) )
            const randomIndexForFlagSelector = Math.floor(Math.random() * countriesWithoutDuplicates.length);
            countriesForGameBoard.push(countriesWithoutDuplicates[randomIndexForFlagSelector])
        }
        const randomIndexForFlagQuestion = Math.floor(Math.random() * countriesForGameBoard.length);
            setQuestion({
                flagQuesstionId:countriesForGameBoard[randomIndexForFlagQuestion]?.country ?? undefined,
                flagQuestionFood:countriesForGameBoard[randomIndexForFlagQuestion]?.value ?? undefined,
            })
            if(countriesForGameBoard.length > 0) setSetelectedFlags([...countriesForGameBoard])
    }
    useEffect(()=>{
        getRandomCountries()
    },[])
    const [selectedFlags, setSetelectedFlags] = useState([]);
      const [question, setQuestion] = useState({
        flagQuesstionId: undefined,
        flagQuestionFood: undefined,
      });
      const [wrongAnswer, setWrongAnswer] = useState(false);
      const [questionAnsweredCorrect, setQuestionAnswer] = useState(false);
      const pathToSelectedImage = `/images/games/foodCultureGame/countryFoodImages/${question.flagQuesstionId}.jpg`;
      
    return (
        <div>
        <span class="toast-container">
        <Toast bg="success" animation={true} show={questionAnsweredCorrect} delay={3000} autohide>
        <Toast.Body class="success-answer">✅Riktig svar ➕➕2 Poeng! </Toast.Body>
      </Toast>
      <Toast bg="danger"  animation={true} show={wrongAnswer} delay={3000} autohide>
      <Toast.Body class="wrong-answer">❌Feil svar</Toast.Body>
    </Toast>
        </span>
        <SelectFlag countries={selectedFlags} selectedCountryFlag={selectedCountryFlag}/>
        <div class="question-container">
        <p>I hvilket land spiser man</p>
        <img src={pathToSelectedImage} alt="questionImage"></img>
        <p>{question.flagQuestionFood}</p>
        </div>
        </div>
    );
}
export default FoodCulturegameSection;