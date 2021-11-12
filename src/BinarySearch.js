import React, { Component } from 'react';
import './BinarySearch.css';
import { buildBinarySearchState } from './helpers';

class BinarySearch extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getArrayRow.bind(this);
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

    getArrayRow() {
        return this.props.array.map((value, index) =>
            <div className={`block ${this.state.found === index ? 'found' : ''}`} key={index}>{value}</div>
        );
    }

    getDescriptionRow() {
        return this.props.array.map((value, index) =>
            <p key={index}>
                {this.state.low === index ? 'low ⬆️ ' : ''}
                {this.state.mid === index ? 'mid ⬆️ ' : ''}
                {this.state.high === index ? 'high ⬆️ ' : ''}
                {this.state.found === index ? 'found ⬆️ ' : ''}
            </p>
        );
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    {this.getArrayRow()}
                </div>
                <div className="row">
                    {this.getDescriptionRow()}
                </div>
            </React.Fragment>
        );
    }
}

export default BinarySearch;