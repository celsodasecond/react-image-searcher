# React Practice on Handling User Input, Forms, and Events ![forthebadge](https://badges.aleen42.com/src/react.svg)

## App Screenshot
![image](https://user-images.githubusercontent.com/75917932/205805489-f75fc117-aa1b-4f0f-86e9-696ac3cc7806.png)


## What is this Project ?

The concept behind this app (image-search) is to study how React handles user input, forms, and events.

## What did I learned ?

- Event Handlers in React
- Adding parenthesis on function call will make the function automatically run.
- Form was refactored using a controlled environment to tell the input a single-fixed final value and also, for the value to not be stored in the HTML environment but is centralized in the virtual DOM.
- How the a child i.e. SearchInput.js can communicate to a Parent i.e. App.js.
- How to make request from inside React using Ajax Requests' to send request to Pixabay API.
- Axios was used instead of Fetch, to make the development easier.
- Learned more about Async/await in React. 
- Always use the id of key property whenever using a map function.

## How to Build ?

All usage instruction and information update on [create-react-app.md](https://github.com/celsodasecond/first-react-app/blob/master/create-react-app.md).

## Development

#### Application Lifecycle

For User Input:
1. User Types Input.
2. Callbacks get invoked.
3. We call setState with new value.
4. Component re-renders.
5. Input is told what the value is.

To Show Searched Image:
1. Component render itself for the first time (no images).
2. onSearchSubmit() method gets called after input.
3. Request made to pixabay.
4. Request complete.
5. Set the image data on state.
6. App components re-renders and show the images.

#### Built With

- [Node JS](https://nodejs.org/en/) 
- [React (create-react-app)](https://reactjs.org/docs/create-a-new-react-app.html)
- [Semantic UI](https://semantic-ui.com/)
- [Pixabay API](https://pixabay.com/api/docs/)

#### Clone Project

```shell
https://github.com/celsodasecond/first-react-app.git
```

This Command will copy a full project to your local environment

