import Nav from './Nav';
import Footer from './Footer';
import React, { useState, Component,useRef } from 'react';
import BookingForm from './Booking/BookingForm';


export default function Main() {


        return (
            <div className="main-grid">
            <Nav/>
                <BookingForm/>
            <Footer/>
            </div>
        )
    }