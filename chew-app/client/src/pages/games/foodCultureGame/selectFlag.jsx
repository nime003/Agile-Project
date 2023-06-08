import React from "react";
import ReactCountryFlag from "react-country-flag"
import {countryName} from './fakeData/countryData';
import '../../../css/selectFlag.css'

const SelectFlag = ({countries,selectedCountryFlag}) => {

const selectedFlag = (selectedCountry) => {
    console.log(selectedCountry)
    selectedCountryFlag(selectedCountry)
}
        return (
    <div>
    <h3 class="title">Velg landet som tilhører lands retten</h3>
    <span className="flags-container" >
    {countries.map((countryObject) => {
        return(
            <div key={countryObject.country}>
            <ReactCountryFlag onClick={() => selectedFlag(countryObject)} className="flag-item" style={{
            fontSize: '10em',
            lineHeight: '10em',
        }} countryCode={countryObject.country} svg/>
        <p>{countryName[countryObject.country]}</p>
        </div>
        )
    })}
    </span>
    </div>
)
}

export default SelectFlag;