import React from 'react';
import { createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  Link, 
  Outlet, 
  RouterProvider 
} from 'react-router-dom';

// Components
import Home from './components/Home';
import About from './components/About';
import Recipes from'./components/Recipes';
import NavigationBar from './components/NavigationBar';

// Styles
import './App.css';


const Root = () => {
  return (
    <>
    {/* Navigation Bar Routes */}
      <div id="navigation-bar"> 
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/recipes-app">Recipes App</Link>
      </div>
    {/* Other Routes */}
      <div>
        <Outlet />
      </div>
    </>
  )
}

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root /> }>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/recipes-app" element={<Recipes />}></Route>
      </Route>
    )
  )

  return (
    
      <div className="App">
        <header id="app-header">Header</header>

        <body id="app-body">
          Body
          <div>
            {/* <NavigationBar /> */}
            <RouterProvider router={router} />        
          </div>
        </body>

        <footer id="app-footer">Footer</footer>
      </div>

  );
}

export default App;
