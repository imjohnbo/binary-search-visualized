import React, { Component } from 'react';
import './BinarySearch.css';

// perform binary search and build up states necessary to do so
const buildBinarySearchState = (array, target) => {
    let low = 0;
    let high = array.length - 1;
    let mid = Math.floor((low + high) / 2);
    let found = -1;
    const states = [];

    while (low <= high) {
        mid = Math.floor((low + high) / 2);

        if (array[mid] < target) {
            low = mid + 1;
        } else if (array[mid] > target) {
            high = mid - 1;
        }
        else {
            found = mid;
        }

        states.push({
            low,
            mid,
            high,
            found
        });

        if (found === mid) {
            break;
        }
    }

    return states;
}

class BinarySearch extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getRow.bind(this);
    }

    componentDidMount() {
        const states = buildBinarySearchState(this.props.array, this.props.searchElement);
        let stateIndex = 0;
        const incrementState = () => {
            if (stateIndex < states.length) {
                this.tick(states[stateIndex++]);
            }
            else {
                clearInterval(this.timerID)
            }
        };

        this.timerID = setInterval(incrementState, this.props.delayMS);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(state) {
        this.setState(state);
    }

    getRow() {
        return this.props.array.map((value, index) =>
            <div 
                className={`block ${this.state.low === index ? 'low' : ''} ${this.state.mid === index ? 'mid' : ''} ${this.state.high === index ? 'high' : ''} ${this.state.found === index ? 'found' : ''}`}
                key={index}
            >
                {value}
            </div>
        );
    }

    render() {
        return (
            <div className="row">
                {this.getRow()}
            </div>
        );
    }
}

export default BinarySearch;