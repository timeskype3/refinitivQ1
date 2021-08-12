import './Q1.css';
import React, {useEffect} from 'react';


function Q1() {
  const [calculationType,setcalculationType] = React.useState("isPrime");
  const [inputNumberState,setInputNumberState] = React.useState();
  const [result,setResult] = React.useState();
  const handlerCalculationSelected = (e) =>{
    setcalculationType(e.target.value);
  };

  useEffect(()=>{
    calulation(calculationType,inputNumberState);
  },[calculationType,inputNumberState]);

  const handlerNumber = (e) =>{
    var number = Math.round(e.target.value);
    if(Math.sign(number)===-1){
      number = 1;
    }
    setInputNumberState(number);
  };
  const isPrime = (number) =>{
    for(let i=2; i<number; i++){
      if(number%i ===0) return false;
    }
    return number>1;
  }

  const isFibanacci = (number) =>{
    var a = 0;
    var b = 1;
    if (number === a || number === b) return true;
    var c = a+b;
    while(c <= number)
    {
        if(c === number) return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
  }

  function calulation(type,number){
    switch(type){
      case "isPrime":
        setResult(isPrime(number));
        break;
      default:
        setResult(isFibanacci(number));
    }
  }

  return (
    <div className="container">
        <div>
          <input type="number" value={inputNumberState} onChange={(e)=>{handlerNumber(e)}}></input>
        </div>
        <div>
          <select onChange={(e)=> handlerCalculationSelected(e)}>
            <option value="isPrime" selected>isPrime</option>
            <option value="isFibanacci" >isFibanacci</option>
          </select>
        </div>
        <div>
            <div>{result != null ? result.toString(): (<div></div>)}</div>
        </div>
    </div>
  );
}

export default Q1;
