import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export default function Counter(props) {
  const count = useSelector((state) => (state.counter.value))
  const dispatch = useDispatch()
}
