import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import './style.css';

// Action
function incCounter(num) {
  return {
    type: INCREMENT,
    num: num,
  };
}
const initialState = {
  count: 0,
};
// Reducer
function reducer(state = initialState, action) {
  switch (action.id) {
    case 'INCREMENT':
      return { count: state.count + action.num };
    default:
      return state;
  }
}

// Store

function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = (e) => setCounter(counter + 1);
  const decrement = (e) => setCounter(counter - 1);
  return (
    <div>
      <div>{counter}</div>
      <button className="btn" onClick={increment}>
        Add
      </button>
      <button className="btn" onClick={decrement}>
        Sub
      </button>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <Counter />
  </Provider>
)