import logo from '../assets/logo.png'

export default function Nav() {
        return (
            <div className="main-nav" id="navbar" >
                <img id="logo" src={logo} alt="logo"/>
                <div id="links">
                   <ul class="nav">
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul> 
                </div>
                
            </div>
        )
    }