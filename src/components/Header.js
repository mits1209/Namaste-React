import { useState } from "react";
import { Link } from 'react-router-dom';



const Title = () => (
    <a href="/">
      <img
    className='logo'
    alt="logo"
    src="http://lh3.googleusercontent.com/1hrS2w6NmSE1-Skwx-NYMLz52kqPJ4pkBofv9x_8s3xTu0aXPVh90WJflY8G4wzl_scYFjKdVWcaAKur58eaEQQzBks"
    />
    </a>
    );

    const Header = () => {
      const [isLoggedIn, setIsLoggedIn] = useState(false);
        return (
           <div className='header'>
             <Title/>
             <div className='nav-items'>
              <ul>
              <li><Link to="/">Home</Link></li>
                 <li><Link to="/about">About</Link ></li>
                  <li><Link to="/contact">Contact</Link> </li>
                  <li><Link to="">cart</Link></li>
              </ul>
             </div>
               {isLoggedIn ?
               ( <button onClick={() => setIsLoggedIn(false)}>Logout</button>
               ) : (
               <button onClick={() => setIsLoggedIn(true)}>Login</button>
               )}
           </div>
        );
     };


    export default Header;