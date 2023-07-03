import Nav from '../Nav';
import Footer from '../Footer';
import React, { useState, Component,useRef,useReducer } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from "../../api"
import Popup from "../Popup/Popup";
import { useNavigate } from "react-router-dom";


export default function BookingPage() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleFormSubmit = (e, formValues) => {
      e.preventDefault();
      setIsFormSubmitted(true);
      const areAllFieldsFilled = Object.values(formValues).every(
        (value) => value
      );
  
      if (areAllFieldsFilled) {
        setIsPopupVisible(true);
      }
    };

    function updateTimes(date) {
        const dateObj = new Date(date)
        return fetchAPI(dateObj)
      }

  const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
  ];


    const [availableTimes, dispatchOnDateChange] = useReducer(
        updateTimes,
        [],
        initializeTimes
      );
    

        return (
            <div className="main-grid">
            <Nav/>
                <BookingForm           
                availableTimes={availableTimes}
                dispatchOnDateChange={dispatchOnDateChange}
                onFormSubmit={handleFormSubmit}
                isFormSubmitted={isFormSubmitted}/>

{isPopupVisible && (
        <Popup
          onClose={() => {
            setIsPopupVisible(false);
            
          }}
          title="Reservation Completed!"
          description="Thank you for choosing Little Lemon! Your reservation has been successfully made. You will receive a confirmation email with the details of your reservation. We are excited to see you soon!"
        />
      )}
            <Footer/>
            </div>
        )
    }