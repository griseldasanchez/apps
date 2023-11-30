import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <header id="app-header">
        Header 
      </header>
      
      <div id="navigation-bar">
        Navigation Bar
        <NavigationBar />
      </div>
      
      <body id="app-body">
        Body
      </body>
      
      <footer id="app-footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
