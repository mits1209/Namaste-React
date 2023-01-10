import React from 'react';
import ReactDOM from 'react-dom/client';
import {createElement} from 'react';
import logo from './images/logo.png';
import avatar from './images/avatar.png'

 
const heading = createElement("div", {
   id: "container",
   
}, [React.createElement("h1", 
{
   id: "title",
   key: "1",
},"This is heading one from createElement"), createElement("h2", 
{
   id: "title",
   key: "2",
},"This is heading two from createElement"), createElement("h3", 
{
   id: "title",
   key: "3",
},"This is heading three from createElement")
]);

//    JSX => React.createElement => Object => HTML(DOM)

const header2 = <div id="header11">
   {heading}
   <h1 id="title" key="h1">
   This is heading one from JSX
      </h1>
      <h2 id="title" key="h2">
      This is heading two from JSX
      </h2>
      <h3 id="title" key="h3">
      This is heading three from JSX
      </h3>
   </div>
// functional Component

const Header3 = () => {
   return (
      <div id="header22"
            key="d2">
               {header2}
               <h1 key="h21">This is heading one from functional Component</h1>
               <h2 key="h22">This is heading two from functional Component</h2>
               <h3 key="h23">This is heading three from functional Component</h3>
            </div>
   )
}

const HeaderComponent = () => {
   return (
      <div className='container'>
         <div className='head'>
         <a className='mylogo'>
            <img src={logo} alt='logo' width={30} height={30}></img>
         </a>
         <input type="search" placeholder='Search Here' ></input>
         <button>Search</button>
         <a className='user'>
         <img src={avatar} alt='avatar' width={30} height={30}></img>
         </a>
         </div>
         <Header3 />
      </div>
   )
}

// const data = api.getData(); // XSS (Cross Side Scripting Attack)--- JSX takes care of this by sanitization 

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<HeaderComponent/>);
 
