import React from 'react';
import './App.css';
import List from './components/List';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  if (!<List/>) return <h1 className="loading-comment">Loading......<span role="img" aria-label="alien">👽</span></h1>;

  return (
    <div className="App">

      <h1 className="Header">Star Wars Characters</h1>
      <h2>Do You Have a Favorite?</h2>
      <List/>
    </div>
  );
}

export default App;
