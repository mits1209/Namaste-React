import React, { lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
import UserContext from './Utils/UserContext';

// import About from "./components/About";
// import Instamart from './components/Instamart';   // Normal way to import components
// Lazy Loading (Dynamic Import) of a component 
// Upon On Demand Loading -> upon render -> suspend Loading
const Instamart = lazy(() => import("./components/Instamart"));   //This is just a promise
const About = lazy(() => import("./components/About"));

const AppLayout = () => {

   const [user, setUser] = useState({
      name: "Mitika Gupta",
      email: "mitikagupta12@gmail.com",
   })


   return (
      <UserContext.Provider 
      value={{
         user:user
       }}
      >
      <Header/>
      <Outlet />
      <Footer/>
      </UserContext.Provider>
      );
   };

   const appRouter = createBrowserRouter([
      {
         path: "/",
         element: <AppLayout />,
         errorElement: <Error />,
         children: [
            {
               path: "/",
               element: <Body />,
            },
            {
               path: "/about",             // parentPath/{path} => localhost:1244/about/profile
               element: <Suspense fallback={<Shimmer />}>
                  <About />
                  </Suspense>,
               children: [{
                  path: "profile",        // parentPath/{path} => localhost:1244/about/profile
                  element: <Profile />,
               },
            ],
            },
            {
               path: "contact",              // parentPath/{path} => localhost:1244/about/profile
               element: <Contact />,
            },
            {
               path: "/restaurant/:resId",
               element: <RestaurantMenu  />,
            },
            {
               path: "/instamart",              
               element: <Suspense fallback={<Shimmer />}>
                      <Instamart />
                      </Suspense>,
            },
         ],
      },
      
   ]);

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter} />);
 
