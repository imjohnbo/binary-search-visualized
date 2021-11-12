import React, { Component } from 'react';
import './BinarySearch.css';

// perform binary search and build up states necessary to do so
const buildBinarySearchState = (array, target) => {
    let low = 0;
    let high = array.length - 1;
    let mid = Math.floor((low + high) / 2);
    let found = -1;

    // initial state
    const states = [{
        low,
        mid,
        high,
        found
    }];

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

    return {
        states,
        found
    };
}

const { states } = buildBinarySearchState(props.arr, props.searchElement);

class BinarySearch extends Component {
    constructor(props) {
        super(props);
        this.state = states[0];
        this.getRow.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            this.props.delayMS
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    getRow() {
        return this.props.array.map((value, index) =>
            <div className="block" key={index}>{value}</div>
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