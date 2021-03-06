import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux'
class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.decrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.addCounter}  />
                <CounterControl label="Subtract 5" clicked={ this.props.subCounter}  />
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return{
    ctr : state.counter
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        incrementCounter: () => dispatch({type : 'INCREMENT'}),
        decrementCounter: () => dispatch({type : 'DECREMENT'}),
        addCounter: () => dispatch( {type: 'ADD', value: 5}),
        subCounter: () => dispatch( {type: 'SUB', value: 5})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);