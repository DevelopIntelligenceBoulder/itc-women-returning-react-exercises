# Exercise: React Router

## Instructions

- Install React router via npm: `npm i react-router-dom`.

- In `src/App.js`, import the `BrowserRouter`, `Routes`, `Route`, and `Link` components form `react-router-dom`.

- Wrap your application with the `<BrowserRouter>` component.

- Use the `Link` component to switch between pages similarly to how a `<a>` tag works in HTML. Starter:
``` js
<ul>  
    <li>  
    <Link to="/">Home</Link>  
    </li>  
    <li>  
    <Link to="/about">About Me</Link>  
    </li>  
    <li>  
    <Link to="/jeopardy">Jeopardy</Link>  
    </li>  
</ul> 
```
> Note: React Bootstrap Navbar component can integrate nicely with React Router `<Link>` components for a prettier nav!.

- Below your nav element, add the `<Routes>` component from React Router. 

- Inside of `<Routes>`, begin creating `<Route>` components:

    - Render the Jeopardy component from the previous exercise at the `/jeopardy` path. 
    
    - Create a couple more routes and add render new components at their path. 

    - Create a '404' (page not found) page that displays when a user navigates to a route that does not exist. 