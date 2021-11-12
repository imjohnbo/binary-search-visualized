import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BinarySearch from './BinarySearch';

const array = [1, 2, 3];
const searchElement = 1;

ReactDOM.render(
  <React.StrictMode>
    <h1>
      Array: <code>{JSON.stringify(array)}</code>
    </h1>
    <h2>
      Search element: <code>{searchElement}</code>
    </h2>

    <BinarySearch
      delayMS='3000'
      array={[1, 2, 3]}
      searchElement={1}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
