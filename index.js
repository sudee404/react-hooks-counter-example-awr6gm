import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import './style.css';


function Counter() {
  // const [counter, setCounter] = useState(0);
  const count = useSelector((state) => (state.counter.value))
  // const increment = (e) => setCounter(counter + 1);
  // const decrement = (e) => setCounter(counter - 1);
  const dispatch = useDispatch()
  return (
    <div>
      <div>{count}</div>
      <button className="btn" onClick={() => dispatch(increment())}>
        Add
      </button>
      <button className="btn" onClick={() => dispatch(decrement())}>
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