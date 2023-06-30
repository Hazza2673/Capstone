import Nav from './Nav';
import Footer from './Footer';
import React, { useState, Component,useRef } from 'react';





export default function BookingForm() {

    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);
    const handleChangeDate = (e) => {
    setDate(e.target.value);
};


const options = [
    {label:'17:00', value:'17:00'},
    {label:'18:00', value:'18:00'},
    {label:'19:00', value:'19:00'},
    {label:'20:00', value:'20:00'},
    {label:'21:00', value:'21:00'},
    {label:'22:00', value:'22:00'},
];



const [availableTimes, setAvailableTimes] = useState('17:00');
const handleChange = (event) => {
    setAvailableTimes(event.target.value);
  };


  const [guests, setGuests] = useState('');
  const handleChangeGuest = (event) => {
    setGuests(event.target.value);
  };


const occasionOptions = [
    {label:'None', value:'None'},
    {label:'Birthday', value:'Birthday'},
    {label:'Anniversary', value:'Anniversary'},
];

const [occasion,setOccasion] = useState('None')
const handleChangeOccasion = (event) => {
    setOccasion(event.target.value);
  };

        return (
            <div className="booking">
        <Nav/>
        <body id='booking'>
            <h1>This is the Booking form</h1>
           <form id='bookingForm'>
        <label for="res-date">Choose date</label>
            <input type="date" value={date} onChange={handleChangeDate} ref={dateInputRef} id="res-date"/>


        <label for="res-time">Choose time</label>
            <select options={options} value={availableTimes} onChange={handleChange} id="res-time ">
              {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
            </select>

        
        <label for="guests">Number of guests</label>
            <input type="number" value={guests} onChange={handleChangeGuest} placeholder="1" id="guests"/>


        <label for="occasion">Occasion</label>
            <select id="occasion" value={occasion} options={occasionOptions} onChange={handleChangeOccasion} >
            {occasionOptions.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
            </select>
        <input type="submit" value="Make Your reservation"/>
    </form> 
    
    <p>Time : {availableTimes}</p>
    <p>Amount of guests: {guests}</p>

    <p>Selected Date: {date}</p>
    <p>Occasion: {occasion}</p>

        </body>

    
    <Footer/>

            </div>
        )
    }