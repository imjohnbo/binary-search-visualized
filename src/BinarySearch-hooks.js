import React, { useState, useEffect } from 'react';
import './BinarySearch.css';
import { buildBinarySearchState } from './helpers';

function BinarySearch(props) {

  const [step, setStep] = useState({});

  useEffect(() => {
    const states = buildBinarySearchState(props.array, props.searchElement);
    let stateIndex = 0;
    const timerID = setInterval(incrementState, props.delayMS);

    function incrementState() {
      console.log('hey', stateIndex, states);
      if (stateIndex < states.length) {
        tick(states[stateIndex++]);
      }
      else {
        clearInterval(timerID)
      }
    };

    return () => {
      clearInterval(timerID);
    };
  }, [props.array, props.delayMS, props.searchElement]);

  function tick(s) {
    setStep(s);
  }

  function getArrayRow() {
    return props.array.map((value, index) =>
      <div className={`block ${step.found === index ? 'found' : ''}`} key={index}>{value}</div>
    );
  }

  function getDescriptionRow() {
    return props.array.map((value, index) =>
      <p key={index}>
        {step.low === index ? 'low ⬆️ ' : ''}
        {step.mid === index ? 'mid ⬆️ ' : ''}
        {step.high === index ? 'high ⬆️ ' : ''}
        {step.found === index ? 'found ⬆️ ' : ''}
      </p>
    );
  }

  return (
    <React.Fragment>
      <div className="row">
        {getArrayRow()}
      </div>
      <div className="row center">
        {getDescriptionRow()}
      </div>
    </React.Fragment>
  );
}

export default BinarySearch;
