 
 
 
 
 import React from "react"
 import ReactDOM from "react-dom/client"
 
 //? content in the page
        const headingMod = React.createElement("h1",{
            id: "head"
        },"This head tag is comming from React")
        
        const paraMod  = React.createElement("p",{
            id:"para"
        },
        "This all I need")  
        
        const container = React.createElement("div",{
            id: "container"
        },
        [headingMod,paraMod])
        
        
        //? react-dom    
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(container)