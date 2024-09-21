## Content Delivery Networks -

these are servers spread across globe containing the replica of the content from the origin source.
whenever a user request a data from the source, then these CDN which are globally nearer to the user sends the data. this saves latency time.
these are used in places where there is more requrest for high data like photos and videos.

The main parts during CDN are:
origin server- the server where the actual content lies and is the only source of truth. for every update request, updatation happens at the origin server. but whenever there is request for data, it is first checked in the nearest PoP (Point of presence) or Extended servers and data is returned
PoP- point to presence is the CDN servers which are spread globally and serve as a intermediate between client and origin server.

it is very logical to keep the clone of data at the CDN as because lets say the data has changed and now for a user to get data he has to establish the connection to server and then get the data. but these PoP have already established secure connection with origin server, and they can request the data and then return to the client.

Also lets say the data is not present in the PoP, then the request goes to the origin server, and then a copy of data is send to the nearest CDN for further use.

## CORS

cors is a mechanism followed by browsers to prevent reqest of resources from a different orgin. browsers follow same origin method.
this method allows to access resource from a same origin. but when requested for a data from different origin a cors error is shown.
now one can configure their server to access the resources by different cross-origins by providing their urls. cors origin can happen if host is differnt, port is differnt, or origin is different.

when making a request server checks the cross-orgin and if allowed then sets in the header Access-Control-Allow-Origin.
for http methods like get, it is safe, but other methods that change data on server also needs to be verified.

so for such request, before actual request goes to server, a preflight request is made, to server and server responds with the methods allowed, and then browser makes the request only if the method is allowed.

(AWS link)[https://aws.amazon.com/what-is/cross-origin-resource-sharing/]

## react basics

react uses two files

### React

it contains the core functionalities of react

### ReactDOM 

it contains the methods that help us manipulate the dom.
when we make a simple application of react, then few of the methods that react uses is,

1. createElement- it is defined in React module, it creates a element. it takes three parameters. (elementToBeCreated,attributes for the element,children components to be rendered and it can be an array of children also if multiple childrent present);
2. createRoot- it is the element inside which react will inject all the elements created. 
3. render- it renders the element into the root.


### package.json
it is a configuration file for npm. it contains all the dependency list that a project depends upon. also it provides a path to transfer javascript projects without sending the node_modules folder. so people can just look at this file for reference and install the neccessary dependency for a project.

npm uses this file to have all the configuration


### bundler

bundler is a tool that that packages the different code files, and compresses it so that it can be shipped to production.

Eg: Vite, webpack, parcel

(Bundler)[https://snipcart.com/blog/javascript-module-bundler]

### dev dependency vs dependency

dev dependency are those dependency that are only required when we are developing our application while a dependency is required in all phases of application starting from development to production.

(Dependency Vs  DevDependency)[https://www.dhiwise.com/post/package-management-devdependencies-vs-dependencies]

### symbols in version
[major,minor,patch]

^(carat) -  it represent changes in middle number.
Eg: ^1.2.3 := >=1.2.3 <2.0.0-0 in this, patch and minor version will get automatically updated.
~(tilde) - it represent changes in last number.
EG: ~1.2.3 := >=1.2.3 <1.(2+1).0 := >=1.2.3 <1.3.0-0 in this, only patch will get automatically updated.


it is better to update minor changes automatically but not major changes as it can break the code due to compatibility issues.
so it is safe to put ^ and not ~.

### package-lock.json

it keeps record of the exact version of the dependency installed.

### parcel

- dev build
- local server
- Hot module replacement 
- file watching algorithm
- faster builds due to caching
- Image optimization
- if build is done for production, then it will minify the the files
- bundles the files
- compression of files
- consistent hashing
- code splitting
- differential bundling
- Diagnostic
- HTTPs hosting facility
- files created by parcel

(parcel features)[https://medium.com/@nikhildhariwal2004/parcel-is-a-beast-an-all-in-one-bundle-for-powerful-web-development-e79f8a70cbd6]

### JSX

JSX is not HTML in javascript. it is a HTML like syntax.

it is a merge between these two so that react elements can be visualized properly while creating react elements. We can still make react apps without the use of JSX, but the code would be clumsy and difficult to follow as using React.createElement with nested children would be very difficult.

so to tackle this problem, JSX was created to make this visualization of the elements creation easy.

this JSX code is not understood by JS engine or browsers.
so it is also not a valid javascript code
so before the JSX code reaches JS engine, it is transpiled into the js object which JS engine receives and parses it.
this transpilation is done the bundler. in our case parcel does it. parcel takes help of babel for transpilation.
transpilation means transforming one code to another.

### React component

two types of component
- functional component - a javascript function returning JSX is a functional component
- class based component (old way)

component composition is a react component inside another react component


# config driven UI

It is a concept in which the UI is driven by a configuration. This configuration is send from the backen to frontend. The frontend then parses the configuration and then renders the component accordingly.
So this configuration can contain the size, position, colour, and every other UI detail that is required for building UI.

When this configuration is reached fronted, a hook function parses this data and then renders the component recursively to achieve the UI.

Advantage of this technique is that we can build dynamic UI based on user preference set on the backend.

A simple example would be dark or light mode.

suppose we visit a website and want to see the website in dark mode and switch to it. this information is saved in the backend. now when we visit this website next time, it automatically shows us the website in dark mode. but this might not be true for ohter users. they will be rendered based on their choice.

so this type of building UI gives more flexibility.

# why key prop must be passed to the component when looping through components

Lets take a case where 100 cards are being rendered into the UI. and we haven't provide the key to the cards.
Now when one more card is added to the UI, anywhere, so react will not know the difference between already rendered 100 cards and the newly added card. so what it will do, it will render all the cards. and this will happen everytime whenever the card container changes. this is a huge hit in the perfomance. for small application it might not be a big issue, but for a larger application where, there are lot of card or components to be looped and rendered, like infinite scroll, this will be a serious performance issue.

and when we pass key as a prop, then react exactly knows what elements were rendered on the UI, and which is the new card so it renders only the new card improvising the performance of rendering.


# hooks

hooks are javascript utility function that are provided by react by default. It provides variables with special features in it.

 - useState()
 	it is use to give state variable in react.


 - useEffect()


 # Reconciliation algorithm ( React Fiber )

The process of updating the UI using virtual DOM and diffing algorithm is called reconciliation. from react 16, reactconciliation is called react fiber as it uses updated diffing algorithm.
 

 # actual DOM vs virtual DOM

 React uses the concept of virtual DOM for faster UI manipulation. 
 actual DOM is the real DOM that is painted on the browsers or screens, while virtual DOM is the representation of actual DOM.

 actual DOM is the elements of HTML, but virtual DOM is the javascript object which react creates.

 # diffing algorithm

 this algorithm finds out the difference between the two virtual DOM (previous and current) which helps react to know exactly which elements have changes in the UI and then figures out the minimal changes to paint it in UI.
 The reason why two objects are compared and not HTML DOM, because, it is easier to compare two JS objects compared to two HTML elements.


# monolith vs microservices architecture

monolith
 - in monolith architechture, all the feature are developed in a single environment. 
 - every code was written in same service
 - 

microservice 
 - Each logical feature is splitted into separe environment.
 - each of these environment interact with each other to make the application run


 # approaches to render data on UI

 Approach - 1

 loadsThePage->makeAPICall->renderPageWithData

 Approach - 2

 LoadsThePage->RenderWithNoData->makeAPICall->renderWithNewData


