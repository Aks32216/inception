import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", 
    { id: "parent" }, [
    React.createElement("div", 
        { id: "child" }, 
        [React.createElement("h1", {}, "Hello world"),React.createElement("h2", {}, "Hello world2")]
    ),
    React.createElement("div", 
        { id: "child2" }, 
        [React.createElement("h1", {}, "Hello world"),React.createElement("h2", {}, "Hello world and end of world")]
    )
])

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);