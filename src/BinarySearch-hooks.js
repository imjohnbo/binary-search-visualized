import React, { useState, useEffect } from 'react';
import './BinarySearch.css';
import { buildBinarySearchState } from './helpers';

function BinarySearch({
  searchArray = [],
  searchElement = '',
  delayMS = 1000,
  ...props
}) {

  const [step, setStep] = useState(0);
  const states = buildBinarySearchState(searchArray, searchElement);

  useEffect(() => {
    const timerID = setInterval(incrementState, delayMS);

    function incrementState() {
      if (step < states.length - 1) {
        const newStep = step + 1;
        setStep(newStep);
      }
      else {
        clearInterval(timerID)
      }
    };

    return () => {
      clearInterval(timerID);
    };
  });

  function getArrayRow() {
    return searchArray.map((value, index) =>
      <div className={`block ${states[step].found === index ? 'found' : ''}`} key={index}>{value}</div>
    );
  }

  function getDescriptionRow() {
    return searchArray.map((value, index) =>
      <p key={index}>
        {states[step].low === index ? 'low ⬆️ ' : ''}
        {states[step].mid === index ? 'mid ⬆️ ' : ''}
        {states[step].high === index ? 'high ⬆️ ' : ''}
        {states[step].found === index ? 'found ⬆️ ' : ''}
      </p>
    );
  }

  return (
    <React.Fragment>
      <div className="row" {...props}>
        {getArrayRow()}
      </div>
      <div className="row center">
        {getDescriptionRow()}
      </div>
    </React.Fragment>
  );
}

export default BinarySearch;
