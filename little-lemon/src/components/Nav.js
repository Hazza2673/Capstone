import logo from '../assets/logo.png'
import { Routes, Route, Link } from "react-router-dom";

export default function Nav() {
        return (                    
            <nav id="links">
                <Link to='/' className='nav-item'><img id="logo" src={logo} alt="logo"/></Link>
                <ul class="nav">
                    <li><Link to='/' className='nav-item'>Home</Link></li>
                    <li><Link to='/about-us' className='nav-item'>About</Link></li>
                    <li><Link to='/menu' className='nav-item'>Menu</Link></li>
                    <li><Link to='/reservations' className='nav-item'>Reservations</Link></li>
                    <li><Link to='/delivery' className='nav-item'>Order Online</Link></li>
                    <li><Link to='/login' className='nav-item'>Login</Link></li>
                </ul> 
            </nav>
                
        )
    }