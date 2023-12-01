import React from 'react';
import { createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  Link, 
  Outlet, 
  RouterProvider 
} from 'react-router-dom';

// Components
import Home from './components/Home/Home';
import About from './components/About';
import RecipesApp from'./components/Recipes/RecipesApp';
import { dataLoader } from './components/Recipes/RecipesApp';
import Footer from './components/Footer/Footer';
import RecipeDetails from './components/Recipes/RecipeDetails';
// eslint-disable-next-line
import NavigationBar from './components/NavigationBar';

// Styles
import './App.css';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root /> }>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/recipes-app" element={<RecipesApp />} loader={dataLoader}></Route>
        <Route path="/recipe-details" element={<RecipeDetails />}></Route>
      </Route>
    )
  )

  return (
    
      <div id="App">
        <header id="app-header">Header</header>

        <div id="app-body">
          <div>
            <RouterProvider router={router} />        
          </div>
        </div>

        <footer id="app-footer">
          <Footer />
        </footer>
      </div>

  );
}

export const Root = () => {
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

export default App;
