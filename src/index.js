import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BinarySearch from './BinarySearch-hooks';

const array = [1, 2, 3];
const searchElement = 1;
const delayMS = 1000;

ReactDOM.render(
  <React.StrictMode>
    <h1>
      Array: <code>{JSON.stringify(array)}</code>
    </h1>
    <h2>
      Search element: <code>{searchElement}</code>
    </h2>

    <BinarySearch
      delayMS={delayMS}
      array={array}
      searchElement={searchElement}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
