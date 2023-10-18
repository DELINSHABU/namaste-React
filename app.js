

//? content in the page
const heading = React.createElement("h1",{
    Id: "head"
},"Fuck you all")

const para  = React.createElement("p",{
    id:"para"
},
"This all I need")

const container = React.createElement("div",{
    id: "container"
},
[heading,para])
//? react-dom    

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)