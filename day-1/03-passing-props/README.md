# Exercise: Passing Props

## Instructions

- Create a component called `ToDoApp` which accepts the following props:
 - name (string)
 - weather (object)

Sample weather object:
 ``` js
 {
   currentCity: "Cleveland",
   description: "Sunny",
   temperature: 76
 }
```

 - toDos (an array)

 Sample toDos array:
 ``` js
 [
   "learn React",
   "eat",
   "sleep",
   "practice React",
   "watch React Pluralsight videos",
   "practice JavaScript",
 ]
```

 - It should render a h1 heading that says: "Welcome to [name]'s To-Do List".

 - It should render a h2 heading that says: "The weather in [currentCity] is [description] with a temperature of [temperature] degrees fahrenheit.".

 - It should log each todo to the console.
