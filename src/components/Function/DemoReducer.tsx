import React, { useReducer } from "react";
import { Button } from 'antd';

interface IState {
  count: number
}
const initialState: IState = {count: 0};

function reducer(state = initialState, action: { type: string; payload?: string }) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}
function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="porp-title">
      <Button type="primary" onClick={() => dispatch({ type: 'increment' })}>
        +1
      </Button>
      <Button type="primary" onClick={() => dispatch({ type: 'decrement' })}>
        -1
      </Button>
      <p>Count: {state.count}</p>
    </div>
  );
}
export default ReducerDemo
