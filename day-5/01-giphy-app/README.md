# Exercise: Giphy App

## Instructions

### Setting Up

For this exercise, students will need to create a free developer account with the [Giphy API](https://developers.giphy.com/). Once logged in, students can create an app from their account dashboard and receive an API key.

### Navigation

- Inside `src/App.js`, implement React Router and setup the following routes:

    - `/` - Default / Home Page

    - `/search` - Search Page
    
    - `/saved` - Saved Page

- Create a component for each route, import them into `src/App.js`, and match them to the routes created above. 

- Create a navbar and add Router `Links` to navigate between the three pages.

### Home Page
- Add a `<h1>` element with the page title and an empty `<div>` element to the page. 
- Create a `gifs` property in state that defaults to an empty array.
- Use `useEffect()` to fetch an array of trending gifs from `https://api.giphy.com/v1/gifs/trending?rating=g&api_key=[YOURAPIKEYHERE]` and set them into the state when the components mounts.
- In the empty `<div>`, map over the gif array in state and return an `<img>` element for each object with a `src` attribute of and image URL from the object (ex: `<img src={gif.path.to.image.URL}>)`.

### Search Page
- Add a `h1` element with the page title to the page. 
- Add an `<input>`, `<button>` and an empty `<div>`element to the page. 
- Create an `input` property in state that defaults to an empty string,  and bind its value to the `<input>` element. 
- Create a `gifs` property in state that defaults to an empty array.
- Create an event handler method to change the value of `input` when the `<input>` element is changed. 
- Create an event handler method to fetch an array of gifs from `https://api.giphy.com/v1/gifs/search?rating=g&api_key=[YOURAPIKEYHERE]&q=[input]` when the `<button>` element is clicked, and set them into state.
- In the empty `<div>` method, map over the gif array in state as done for the Home Page. 

### Saving Gifs to localStorage
- On the Home Page, update the array map to return a `<div>` element around each `<img>`.
- Add a `<button>` element below `<img>` that contains the text 'Save'.
- Create an event handler method called `handleSave()` that is called when the Save button is clicked. 
- Pass the value used as the image src from the mapped array to the event handler method (`<button onClick={() => this.handleSave(gif.path.to.image.URL)}>Save</button>`).
- In the `handleSave()` method, create a variable called `saved` and set it to the value of the `savedGifs` item in localStorage if it exists, or an empty array if it does not. 
- Push the image URL passed into the `handleSave` method into the `saved` variable.
- Set the new `saved` array into localStorage as an item called `savedGifs`.
- Repeat the above steps for the Search Page.

### Saved Page
- Add a `<h1>` element with the page title.
- Create a `gifs` property in state and initialize it to the value of the `savedGifs` item in localStorage if it exists, or an empty array if it does not. 
- Map over `gifs` and create a `<div>` element containing an `<img>` and `<button>` element. Add the text 'Remove' to the button.
- Create an event handler method called `handleRemove()` that is called when the Remove. button is clicked. The button should pass the `index` from map to the method.
- In the `handleRemove()` method, use the `index` argument to create a new array from the `gifs` state, removing the gif at `index`. Set the new array to the `gifs` state.
- Use `useEffect()` to update the `savedGifs` item in localStorage after the `gifs` state is changed.
