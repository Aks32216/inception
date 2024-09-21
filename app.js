import React from "react";
import ReactDOM from "react-dom/client";

// const jsxHeading= <h1 className="heading">Hi there 🧚🏼</h1>

const Title = ()=>{
    return (
        <h1 className="heading">Hi there 🧚🏼</h1>
    )
}

const Heading=()=>{
    return (
        <div>
            <Title />
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);