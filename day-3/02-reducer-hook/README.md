# Exercise: Using the useReducer Hook for ToDo List

## Instructions

In this exercise, you'll update the ToDo List component to utilize the `useReducer()` hook instead of managing state with `useState()`.

### Part 1: Getting Started

- If you already have a version of the ToDo List, you can use it for this exercise. Otherwise, you can start with a basic version or refer to the provided solution (`solutions/todo-list-hooks`).

### Part 2: Implementing `useReducer()`

- Begin by refactoring your ToDoList.js component to use the `useReducer()` hook instead of `useState()` for managing the state of the ToDo list.

- Create an initial state object that includes a `todos` array to hold the ToDo items.

- Define a reducer function that will handle various actions to modify the state, such as adding a new ToDo, removing a ToDo, toggling the completion status of a ToDo, and resetting the list.

### Part 3: Adding and Removing ToDo Items

- Implement functionality to add and remove ToDo items from the list using the `useReducer()` hook.

- For adding items, dispatch an action with a type of 'ADD_TODO' along with the new ToDo object.

- For removing items, dispatch an action with a type of 'REMOVE_TODO' along with the index of the ToDo item to be removed.

### Part 4: Toggling ToDo Completion Status

- Extend the functionality to toggle the completion status of ToDo items.

- Dispatch an action with a type of 'TOGGLE_TODO' along with the index of the ToDo item to be toggled.

- Update the ToDo item's completion status in the state accordingly.

### Part 5: Displaying a Reset Button

- Implement a feature to display a reset button only when the ToDo list is empty.

- Conditionally render a reset button based on the length of the `todos` array in the state.

### Part 6: Testing

- Test your updated ToDo List component to ensure that adding, removing, toggling completion status, and resetting functionality work as expected.

### Additional Challenges

- Once you've completed the basic functionality, you can explore additional features such as sorting ToDo items, filtering completed/incomplete items, or adding due dates to ToDo items.
