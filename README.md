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


