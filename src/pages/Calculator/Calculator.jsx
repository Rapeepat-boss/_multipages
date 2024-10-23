import React, { useState } from 'react';

import "./Calculator.css";

function Calculator() {

    const [display, setDisplay] = useState('');
  const [re, setRe] = useState('');
  const [lastOperator, setLastOperator] = useState(null);
  const [lastOperand, setLastOperand] = useState(null);

  const appendCharacter = (value) => {
    setDisplay(prev => prev + value);
    setRe(prev => prev + value);

    if (['+', '-', '*', '/'].includes(value)) {
      setDisplay('');
    }
  };

  const clearOrUndo = () => {
    setDisplay('');
    setRe('');
    setLastOperator(null);
    setLastOperand(null);
  };

  const deleteLast = () => {
    let lastOperatorIndex = -1;
    const operators = ['+', '-', '*', '/'];

    for (let operator of operators) {
      const index = re.lastIndexOf(operator);
      if (index > lastOperatorIndex) {
        lastOperatorIndex = index;
      }
    }

    if (lastOperatorIndex !== -1) {
      setRe(re.slice(0, lastOperatorIndex + 1));
      setDisplay('');
    } else {
      setRe('');
      setDisplay('');
    }
  };

  const calculate = () => {
    try {
      let result = eval(re);
      if (!lastOperator && !lastOperand) {
        const operators = ['+', '-', '*', '/'];
        for (let op of operators) {
          let lastIndex = re.lastIndexOf(op);
          if (lastIndex !== -1) {
            setLastOperator(op);
            setLastOperand(re.slice(lastIndex + 1));
            break;
          }
        }
      } else {
        result = eval(result + lastOperator + lastOperand);
      }

      setDisplay(result.toString());
      setRe(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  // const handleKeyDown = (event) => {
  //   const key = event.key;
  //   if (key >= '0' && key <= '9') {
  //     appendCharacter(key);
  //   } else if (['+', '-', '*', '/'].includes(key)) {
  //     appendCharacter(key);
  //   } else if (key === 'Enter') {
  //     calculate();
  //   } else if (key === 'Backspace') {
  //     clearOrUndo();
  //   } else if (key === 'Escape') {
  //     deleteLast();
  //   }
  // };

  // React.useEffect(() => {
  //   document.addEventListener('keydown', handleKeyDown);
  //   return () => {
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [re, lastOperator, lastOperand]);


  return (
    <div className='calculator-body'>
    <div className="calculator-container">
      <input type="text" value={display} readOnly id="display" />
      <div className="calculator-buttons">
        <button className='calculator-button' onClick={clearOrUndo}>C</button>
        <button className='calculator-button' onClick={deleteLast}>DEL</button>
        <button className='calculator-button' onClick={() => appendCharacter('/')}>÷</button>
        <button className='calculator-button' onClick={() => appendCharacter('*')}>×</button>

        <button className='calculator-button' onClick={() => appendCharacter('7')}>7</button>
        <button className='calculator-button' onClick={() => appendCharacter('8')}>8</button>
        <button className='calculator-button' onClick={() => appendCharacter('9')}>9</button>
        <button className='calculator-button' onClick={() => appendCharacter('-')}>-</button>

        <button className='calculator-button' onClick={() => appendCharacter('4')}>4</button>
        <button className='calculator-button' onClick={() => appendCharacter('5')}>5</button>
        <button className='calculator-button' onClick={() => appendCharacter('6')}>6</button>
        <button className='calculator-button' onClick={() => appendCharacter('+')}>+</button>

        <button className='calculator-button' onClick={() => appendCharacter('1')}>1</button>
        <button className='calculator-button' onClick={() => appendCharacter('2')}>2</button>
        <button className='calculator-button' onClick={() => appendCharacter('3')}>3</button>
        <button className='calculator-button' onClick={calculate}>=</button>

        <button className='calculator-button' onClick={() => appendCharacter('0')}>0</button>
        <button className='calculator-button' onClick={() => appendCharacter('.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
