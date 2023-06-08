import Modal from 'react-bootstrap/Modal';
import ReactCountryFlag from "react-country-flag"
import '../../../css/selectedCountryModal.css'
import React from "react";

const SelectedCountryModal = ({data,closeModal}) => {
    const {countryCode, countryName, countryValue, modalShow} = data;
    const showModal = modalShow ?? false;
    const idPathToImage = countryCode?.toLowerCase() ?? undefined;
    const pathToSelectedImage = `/images/games/foodCultureGame/countryFoodImages/${idPathToImage}.jpg`

    return (
        
          <Modal
          centered
          show={showModal}
          onHide={closeModal}
        >
          <Modal.Header>
            <Modal.Title class="title-content">
            <ReactCountryFlag style={{
                fontSize: '6em',
                lineHeight: '6em',
            }} countryCode={countryCode} svg/> <span class="country-name">{countryName}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <span class="body-content">
          <img src={pathToSelectedImage} alt=""/>
            <p class="food-text">
            {countryValue}
            </p>
          </span>
          </Modal.Body>
        </Modal>
    );
}

export default SelectedCountryModal;