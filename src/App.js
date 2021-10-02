

import {useSelector, useDispatch} from 'react-redux'
import {decNumber, incNumber} from './actions/index'

function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();

  return (<>
  <pre>  First React App..</pre>

    <div>
      <button style={{marginLeft:"10px"}} onClick = {() => dispatch(incNumber())}> + </button>
      <input style={{marginLeft:"10px"}} value={myState}></input>
      <button style={{marginLeft:"10px"}} onClick = {() => dispatch(decNumber())}> - </button>
    </div>
    </>
  );
}

export default App;
