import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from './counterSlice';

import './counter.styles.scss';

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const [amountIncrement, setAmountIncrement] = useState(0);

  function getAmount(e) {
    e.preventDefault();
    setAmountIncrement(e.target.value);
  }

  function resetAll() {
    setAmountIncrement(0);
    dispatch(reset());
  }

  const getAddValue = Number(amountIncrement) || 0;

  return (
    <div className="main">
      <div className="counter-container">
        <h1>Counter</h1>
        <div className="count">
          <h1>{count}</h1>
        </div>
        <div className="basic-op">
          <button onClick={() => dispatch(increment())}>+ 1</button>
          <button onClick={() => dispatch(decrement())}>- 1</button>
          <button onClick={() => dispatch(reset())}>reset</button>
        </div>
        <div className="amount-input">
          <input
            type="number"
            value={amountIncrement}
            name="increment"
            onChange={getAmount}
          />
          <button onClick={() => dispatch(incrementByAmount(getAddValue))}>
            add {amountIncrement}
          </button>
          <button onClick={resetAll} className="clear-all">
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
