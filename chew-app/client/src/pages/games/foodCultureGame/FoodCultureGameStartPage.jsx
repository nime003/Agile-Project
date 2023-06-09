// Make a list of student names and their picture paths

import React from "react";
import WorldMap from "react-svg-worldmap";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import {data, countryName} from './fakeData/countryData';
import '../../../css/worldMap.css'

// inside the component you declare the navigate this way:
import SelectedCountryModal from "./selectedCountryModal";
import { useState } from "react";

function FoodCultureGameStartPage() {
    const navigate = useNavigate();
    const setCountryName = (countryCode) => {
        // Note: Husk å sette inn objekt til alla lands koder så det kan bli norsk ovsersettelse!
        const selectedContryCode = countryCode.toLowerCase();
        return countryName[selectedContryCode] ?? 'Namn inte funnet'
    };
    const clickOnCountry = ({ countryValue, countryCode}) => {
        if(countryValue && countryCode){
            setState({
                countryName: setCountryName(countryCode),
                countryValue: countryValue,
                countryCode: countryCode,

                modalShow: true,
              });
        } else {
            setState({
                countryName: undefined,
                countryValue: undefined,
                countryCode: undefined,
                modalShow: false,
              });
        }
    }
  const [state, setState] = useState({
    countryName: undefined,
    countryValue: undefined,
    countryCode: undefined,
    modalShow: false,
  });
  // data henter jag fra fakeData/countryData.js
  const populationData = data;
  const closeModal = () => {

    setState({
        countryName: undefined,
        countryValue: undefined,
        countryCode: undefined,
        modalShow: false,
      });
  }

  return (
    <div class="world-map-container">
    <WorldMap
    title="Trykk på ulike landene for å se deres nasjonalrett"
    data={populationData}
    onClickFunction={clickOnCountry}
  />
<SelectedCountryModal data={state} closeModal={closeModal} />
<Button variant="outline-success"  onClick={() => navigate("/games/foodCultureGamePlay")}>Start game</Button>{' '}
    </div>
  );
}

export default FoodCultureGameStartPage;
