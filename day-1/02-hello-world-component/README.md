# Exercise: Hello World Component

## Instructions

### Part 1: Creating & Exporting a Component

- Create a new file called `Hello.js` inside the `src` folder. 

- Inside `src/Hello.js`, create a function called `Hello` that returns a `div` using JSX.

- Inside the `div` element, write `Hello World!`.

- At the bottom of the file, export the `Hello` function / component.

### Part 2: Importing & Rendering a Component

- Inside `src/App.js`, import the `Hello` component created above. 

- Inside the return of `src/App.js`, create an instance of your component using JSX.

``` js

return (
    <div>
        <Hello></Hello>
    </div>
)