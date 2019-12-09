import React, {useState} from 'react';
import Counter from "./components/counter"
import './App.css';


function App(props) {

    const [counterStop, setCounterStop] = useState("running")

    const onClickStop = () => {
      switch(counterStop) {
        case "running" :
          setCounterStop("blocked");
          break;
        case "blocked" :
          setCounterStop("running");
          break;
          default:
      }
    }
   
  return (
    <div  className="App">
      <Counter counterStop={counterStop} top={40} medium={19} bottom={11}/>
      <Counter counterStop={counterStop} top={45} medium={19} bottom={11}/>
      <Counter counterStop={counterStop} top={50} medium={19} bottom={11}/>
    
      <button onClick={onClickStop}>Stop</button>
    </div>
  );
}

export default App;
