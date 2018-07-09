import React, { Component } from 'react';
import * as actionTypes from '../../store/actions';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.onAddIncrement}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubDecrement}  />
                <hr />
                <button onClick = {()=>this.props.onSeeResult(this.props.ctr)}>See Results</button>
                <ul>
                    {this.props.storedResults.map(storedResult => 
                        <li onClick = {()=>this.props.onDeleteResult(storedResult.id)} key = {storedResult.id}>{storedResult.value}</li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr:state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onIncrement:()=>dispatch({type:actionTypes.INCREMENT}),
        onDecrement:()=>dispatch({type:actionTypes.DECREMENT}),
        onAddIncrement:()=>dispatch({type:actionTypes.ADD_INCREMENT, val:5}),
        onSubDecrement:()=>dispatch({type:actionTypes.SUB_DECREMENT, val:5}),
        onSeeResult:(result)=>dispatch({type:actionTypes.GET_RESULT, result: result}),
        onDeleteResult:(id)=>dispatch({type:actionTypes.DELETE_RESULT,elementId: id})
    };
}










export default connect(mapStateToProps,mapDispatchToProps)(Counter);





























