# Exercise: useEffect Hook

## Instructions

- In the `Counter.js` component from the previous exercise, create a `useEffect()` hook that runs once after the component is mounted and then does not run again. 

- Inside the `useEffect()` hook, check localStorage for an item called 'count'. If the value exists, turn it into a number (`Number(localStorage.getItem('count'))`) and then set it to the state using `setCount()`.

- After calling `setCount` from the increment handler, set an item into localStorage called 'count' with the updated count value.

- Repeat the above change for the decrement handler. 