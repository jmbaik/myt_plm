import React, {useReducer} from 'react';
import {Button} from "antd";

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {value: state.value + 1}
        case 'DECREMENT':
            return {value: state.value - 1}
        default:
            return state;
    }
};

const Reducer01 = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});
    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>
            </p>
            <Button onClick={() => dispatch({type: 'INCREMENT'})}>+1</Button>
            <Button onClick={() => dispatch({type: 'DECREMENT'})}>-1</Button>
        </div>
    );
};

export default Reducer01;
