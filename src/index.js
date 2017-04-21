import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyByf-3h1ckVCxriNH5aQaERzqpYZhudBV0';

YTSearch({key: API_KEY, term:'Piazzolla'}, data => console.log(data))

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