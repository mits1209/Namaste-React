

 //     // create h1 tag in JS
 //     const heading = document.createElement("h1");
 //     heading.innerHTML = "Namaste Everyone from javaScript!";

 //     // put h1 tag inside root div
 //   const root = document.getElementById("root")
 //   root.appendChild(heading);
 

//     const heading = React.createElement("h1", {}, "Namaste Everyone!");
//    //  react needs to know where we want to put in stuff that's why we need to createRoot
//     const root = ReactDOM.createRoot(document.getElementById("root"));
// // passing thr react element inside the root
//     root.render(heading);


const heading = React.createElement("h1", 
{
   id: "title",
},
 "heading1");
 const heading2 = React.createElement("h2", 
{
   id: "title",
},
 "heading2");
const container = React.createElement("div", {
   id: "container"
}, [heading, heading2]);

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(container);
