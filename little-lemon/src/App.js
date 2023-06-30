import './App.css';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage';
import Menu from './components/Menu';
import About from './components/About'
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path="/reservations" element={<BookingForm />}/>
      <Route path="/" element={<Homepage />}/>
      <Route path="/about-us" element={<About />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/reservations" element={<Homepage />}/>
      <Route path="/delivery" element={<OrderOnline />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
      

    
    
    
  );
}

export default App;
