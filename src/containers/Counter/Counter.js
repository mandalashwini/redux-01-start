import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux'
import * as actionType from '../../store/action'
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
        console.log("aaa",this.props.store_result)
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.decrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.addCounter}  />
                <CounterControl label="Subtract 5" clicked={ this.props.subCounter}  />
                <hr />
                <button onClick={() => this.props.storeResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.store_result.map(res => (
                        <li key={res.id} onClick={() => this.props.deleteResult(res.id)}>{res.value}</li>
                    )
                    )}
                    </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return{
    ctr : state.ctr.counter,
    store_result :state.res.result

    }
}

const mapDispatchToProps = dispatch =>{
    return{
        incrementCounter: () => dispatch({type : actionType.INCREMENT}),
        decrementCounter: () => dispatch({type : actionType.DECREMENT}),
        addCounter: () => dispatch( {type: actionType.ADD, value: 5}),
        subCounter: () => dispatch( {type: actionType.SUB, value: 5}),
        storeResult: (result) => dispatch( {type: actionType.STORE_RESULT, result: result}),
        deleteResult: (id) => dispatch( {type: actionType.DELETE_RESULT,id:id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);