import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BinarySearch from './BinarySearch-hooks';

const searchArray = [1, 2, 3];
const searchElement = 1;
const delayMS = 1000;

ReactDOM.render(
  <React.StrictMode>
    <h1>
      Array: <code>{JSON.stringify(searchArray)}</code>
    </h1>
    <h2>
      Search element: <code>{searchElement}</code>
    </h2>

    <BinarySearch
      delayMS={delayMS}
      searchArray={searchArray}
      searchElement={searchElement}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
