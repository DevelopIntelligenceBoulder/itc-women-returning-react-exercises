# useMemo Hook

The `useMemo()` hook helps components save on re-running constly operations if unnecessary. 

Note: This is not an exercise, but an oppurtunity to explore how performance optimizations can make dramatic differences in the rendering of our React applications. 

## The Problem

``` js
import { useState } from 'react'

function Counter() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const isEven = () => {
        let i = 0
        //arbitrarily slowing down function
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }

    return (
        <div>
            <div>
                <button onClick={() => setCountOne(countOne + 1)}>Count One - {countOne}</button>
                <span>{isEven() ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={() => setCountTwo(countTwo + 1)}>Count Two - {countTwo}</button>
            </div>
        </div>
    )
}
```

## with `useMemo()`

With useMemo, the value of the "expensive" isEven operation is saved to a variable, rather than being unnecessarily re-ran on every render.

``` js
import { useState, useMemo } from 'react'

function Counter() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    // memoized isEven
    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return countOne % 2 === 0
    }, [countOne])

    return (
        <div>
            <div>
                <button onClick={() => setCountOne(countOne + 1)}>Count One - {countOne}</button>
                {/* Update isEven to reference value instead of function*/}
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={() => setCountTwo(countTwo + 1)}>Count Two - {countTwo}</button>
            </div>
        </div>
    )
}
```

Check out the youtube video in the resources below for a fantastic live demonstration.

## Resources

* [https://reactjs.org/docs/hooks-reference.html#usememo](https://reactjs.org/docs/hooks-reference.html#usememo)
* [https://www.w3schools.com/react/react_usememo.asp](https://www.w3schools.com/react/react_usememo.asp)
* [https://www.youtube.com/watch?v=qySZIzZvZOY](https://www.youtube.com/watch?v=qySZIzZvZOY)