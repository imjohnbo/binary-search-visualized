import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BinarySearch from './BinarySearch';

ReactDOM.render(
  <React.StrictMode>
    <BinarySearch
      delayMS='1000'
      array={[1,2,3]}
      searchElement={1} 
    />
  </React.StrictMode>,
  document.getElementById('root')
);
