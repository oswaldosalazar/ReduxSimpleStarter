import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyByf-3h1ckVCxriNH5aQaERzqpYZhudBV0';

// Create a new component. This componenet should produce some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this components' generated HTML amd put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container')); 