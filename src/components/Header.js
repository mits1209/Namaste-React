import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import useOnline from '../Utils/useOnline';
import UserContext from "../Utils/UserContext";



const Title = () => (
    <a href="/">
      <img
    className="h-28 p-2"
    alt="logo"
    src="http://lh3.googleusercontent.com/1hrS2w6NmSE1-Skwx-NYMLz52kqPJ4pkBofv9x_8s3xTu0aXPVh90WJflY8G4wzl_scYFjKdVWcaAKur58eaEQQzBks"
    />
    </a>
    );

    const Header = () => {
      const [isLoggedIn, setIsLoggedIn] = useState(false);

      const isOnline = useOnline();

      const {user} = useContext(UserContext);
;
        return (
           <div className="flex justify-between bg-amber-200 shadow-lg sm:bg-amber-50">
             <Title/>
             <div >
              <ul className="flex py-10" >
              <li className="px-5">
                <Link to="/">Home</Link>
                </li>
                 <li className="px-2">
                  <Link to="/about">About</Link >
                  </li>
                  <li className="px-2">
                    <Link to="/contact">Contact</Link> 
                    </li>
                  <li className="px-2">
                    <Link to="">cart</Link>
                    </li>
                  <li className="px-2">
                    <Link to="/instamart">Instamart</Link>
                    </li>
              </ul>
             </div>
             <span className="p-10 ">{isOnline? "🟢" : "🔴"}</span>
             <span className="p-10 font-bold text-red-500">{user.name}</span>
               {isLoggedIn ?
               ( <button onClick={() => setIsLoggedIn(false)}>Logout</button>
               ) : (
               <button onClick={() => setIsLoggedIn(true)}>Login</button>
               )}
           </div>
        );
     };


    export default Header;