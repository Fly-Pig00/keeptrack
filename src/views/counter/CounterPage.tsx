import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';


export default function CounterPage() {
  
  const dispatch = useDispatch();
  
  const counter = useSelector(
    (appState: AppState) => appState.counter
  );
  
  const increaseCounter = () => {
    dispatch({
      type: "INCREMENT_ASYNC"
    });
  }
  const decreaseCounter = () => {
    dispatch({
      type: "DECREMENT_ASYNC"
    });
  }
  return (
    <>
      <h2>{counter.toString()}</h2>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </>
  )
}