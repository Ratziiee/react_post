import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from './redux/actions/actions'

function App() {

  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();
  console.log("counter state: " , counter)
  console.log("Login state: " , isLoggedIn)



  return (
    <div>
      <div>
        <h3 style={{marginTop:'100px'}}>
          {isLoggedIn+""}
        </h3>
      <button onClick={() => dispatch(increment(5))}>increase</button>
      <button onClick={() => dispatch(decrement(5))}>decrement</button>
        <h3 style={{marginTop:'100px'}}>
          {counter+""}
        </h3>
      </div>
      <Layout/>
    </div>
  );
}

export default App;
