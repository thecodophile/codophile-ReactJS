## Namaste React Course by Akshay Saini

# Chapter 05 - Inception

## 1. What is `Emmet`?

-> `Emmet` is the essential toolkit for web-developers. It allows you to type shortcuts that are then expanded into full pieces of code for writing HTML and CSS, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.

## 2. Difference between a `Library` and `Framework`?

-> A `library` is a collection of packages that perform specific operations whereas a `framework` contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework. The framework provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a library is used, the application calls the code from the library.

[Link](https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/ "Blog link")

## 3. What is `CDN`? Why do we use it?

-> A `content delivery network` (CDN) refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content. The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.

## 4. Why is React known as `React`?

-> React is named `React` because of its ability to react to changes in data. React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces. The name `"React"` was chosen because the library was designed to allow developers to `"react"` to changes in state and data within an application, and to update the user interface in a declarative and efficient manner. React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.

## 5. What is `crossorigin` in script tag?

-> The crossorigin attribute sets the mode of the request to an `HTTP CORS` Request. The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

## 6. What is diference between `React` and `ReactDOM`

-> React is a JavaScript library, designed for building user interfaces.
React-DOM is a complimentary library to React which glues React to the browser DOM.

-> React is a JavaScript library for building User Interfaces whereas ReactDOM is also JavaScript library that allows React to interact with the DOM. The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.

## 7. What is difference between `react.development.js` and `react.production.js` files via CDN?

-> Development is the stage of an application before it's made public while production is the term used for the same application when it's made public. Development build is several times (maybe 3-5x) slower than the production build.

-> _react.development.js_ files via CDN are usage for development perpose, and are not suitable for production.
where as _react.production.js_ files via CDN are minified and optimized production versions of React

## 8. What is `async` and `defer`?

-> _Async_ - The async attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed as soon as it is available (do not block HTML DOM construction during downloading process ) and don’t wait for anything.

_Syntax_

```
<script src="demo_async.js" async></script>
```

_Defer_ - The defer attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed after the page has finished parsing(when browser finished DOM construction). The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.

Syntax

```
<script src="demo_defer.js" defer></script>
```

[Link](https://javascript.info/script-async-defer "useful")
