import React, {useState, useEffect} from 'react';
import {blueBack, orangeBack, redBack } from "../backgroundStyle";

function Counter(props) {
  const {top, medium, bottom} = props;
  const counterStop = props.counterStop;
  const high = top
  const median = medium
  const low = bottom

  let [time, setTime] = useState(top); 
  let [color, setColor] =useState({})
  
  useEffect(() => {
    // console.log("time", time);

    if (time !== time -1 && time !== 0 && counterStop === "running"){
      setTimeout(() =>{
        setTime(time - 1); 
      }, 1000);
    }
    // console.log("color", color)
    switch(time) {
          case high :
            setColor(blueBack); 
            break;
          case median : 
            setColor(orangeBack)
            break;
          case low : 
            setColor(redBack)
            break;
          default : 
          }      
  },
  [time, counterStop])

  return (
    <div  className="App">
      <p  style={color}>{time}</p>
    </div>
  );
}

export default Counter;
