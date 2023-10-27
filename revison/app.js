import React from "react"
import ReactDOM from "react-dom/client"

const headMod = React.createElement("h1",{
    id: "head",
    class: "head"
},"Hello Everyone this h1 tag is render using React")

const paraMod = React.createElement("p",{
    id: "para",
    class: "para"
},"Hello Everyone this p tag is render using React")

const containerMod = React.createElement("p",{
    id: "cont",
    class: "cont"
},[headMod,paraMod])


const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(containerMod)

