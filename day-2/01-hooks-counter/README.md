# Exercise: Build a Counter Component

## Instructions

### Part 1: Creating a Counter Component

- Create a functional component called `Counter`.

- Use the `useState` hook to manage the state. Initialize the state with a property called `count`.

- In the JSX, create elements to display the current value of `count`, and add increment and decrement buttons.

- Create `incrementCount` and `decrementCount` functions inside the component and use `setCount` from `useState` to update the value of `count` when the corresponding button is clicked.

### Part 2: Additional Functionality

- Modify the functionality to not allow the counter to go below 0.

- Modify the functionality to not allow the counter to go above 20.

- Modify the functionality to change the color of the counter to red if it goes above 10.
    - Refer to [React documentation](https://reactjs.org/docs/faq-styling.html).
    - Make sure the color changes back to the original color when the count goes back below 10.

- Allow an initial count to be passed in as a prop.

    - If an initial count is not passed in, the count should start at 0.

- Add a button to reset the counter to 0 or whatever the initial count was set to when passed in as a prop.

    - Only show this button if the counter has been modified from its original state.

### Part 3: Render Multiple Counters

- Now that we've built a counter component that can accept its starting value as a prop, try rendering multiple counter components at once - notice how each keeps track of its own instance of its state values.