import React from "react";
import SelectFlag from './selectFlag'
import { useState } from "react";
import {data} from './fakeData/countryData';
import '../../../css/foodCountryGamePlay.css'


const FoodCulturegameSection = () => {
    const countryData = data;
    const selectedCountryFlag = (selectedFlagObject) => {
        const {country} = selectedFlagObject;
        setState({
            selectedFlagId: country,
        })
    }
    const getRandomCountries = () => {
        const allCountries = countryData;
        let countriesForGameBoard = [{country: 'se', value: ''}];
        for(let i = 0; i < 3; i++){
            //remove already selected countries
            let addedCountryIds = countriesForGameBoard.map((c) => c?.country) ?? [];
            const countriesWithoutDuplicates = allCountries.filter((c)=> !addedCountryIds.includes(c?.country) )
            const randomIndex = Math.floor(Math.random() * countriesWithoutDuplicates.length);
            countriesForGameBoard.push(countriesWithoutDuplicates[randomIndex])
        }
        // setSelectableFlags([countriesForGameBoard]);
        console.log(countriesForGameBoard)
        return countriesForGameBoard;
    }
    // const selectRandomFoodForQuestion = () => {
    //     if(state?.selectableFlags.length > 0){
    //         const randomIndex = Math.floor(Math.random() * state.selectableFlags.length);
    //         setState({
    //             languageForQuestion: state?.selectableFlags[randomIndex].value
    //         })
    //     }
    // }
    const [state, setState] = useState({
        selectedFlagId: 'Ikke valgt land',
      });
    //   const [selectableFlags, setSelectableFlags] = useState([]);
    return (
        <div>
        <SelectFlag countries={getRandomCountries()} selectedCountryFlag={selectedCountryFlag}/>
        <p class="selected-country-text">{`TEST:valgt lands code: ${state.selectedFlagId}`}</p>
        </div>
    );
}
export default FoodCulturegameSection;