// const heading = React.createElement("h1", {class: "heading"}, "Hello from js");



// const root = ReactDOM.createRoot(document.getElementById("root"));
// const root2 = ReactDOM.createRoot(document.getElementById("root1"));
// root2.render(heading);
// root.render(heading);


/*
<div id="parent">
    <div id="child">
        <h1>Hello world</h1>
    </div>
</div>
*/


const parent = React.createElement("div", 
    { id: "parent" }, [
    React.createElement("div", 
        { id: "child" }, 
        [React.createElement("h1", {}, "Hello world"),React.createElement("h2", {}, "Hello world2")]
    ),
    React.createElement("div", 
        { id: "child2" }, 
        [React.createElement("h1", {}, "Hello world"),React.createElement("h2", {}, "Hello world2")]
    )
])

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);