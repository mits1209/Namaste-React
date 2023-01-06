import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", 
{
   id: "title",
},
 "This is heading 1");
 const heading2 = React.createElement("h2", 
{
   id: "title",
},
 "This is heading 2");

 const heading3 = React.createElement("h3", 
{
   id: "title",
},
 "This is heading 3");
 const heading4 = React.createElement("h4", 
 {
    id: "title",
 },
  "This is heading 4");
 
const container = React.createElement("div", {
   id: "container"
}, [heading, heading2, heading3, heading4]);

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(container);