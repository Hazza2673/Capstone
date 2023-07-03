import './App.css';
import Header from './components/Header';
import BookingForm from './components/Booking/BookingForm';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage';
import Menu from './components/Menu';
import About from './components/About'
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import Main from './components/Main';
import BookingPage from './components/Booking/BookingPage';

function App() {
  return (
    <Routes>
      <Route path="/reservations" element={<BookingPage />}/>
      <Route path="/" element={<Homepage />}/>
      <Route path="/about-us" element={<About />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/delivery" element={<OrderOnline />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/main" element={<Main />}/>

    </Routes>
      

    
    
    
  );
}

export default App;
