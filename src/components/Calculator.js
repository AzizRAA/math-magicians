/*  eslint eol-last: ["error", "always"]  */
import './calculator.css';
import React, { useState, useEffect } from 'react';
import calculate from '../logic/calculate';
import CalcBtn from './button';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [totals, setTotals] = useState({});
  useEffect(() => {
    setTotals({
      total: null,
      next: null,
      operation: null,
    });
  }, []);
  const handleClick = (event) => {
    setTotals(calculate(totals, event.target.textContent));
  };
  return (
    <div className="calculator-container">
      <div className="display" id="display">
        <span className="hint">
          {totals.total}
          {totals.operation}
          {totals.next}
        </span>
        <span className="total">
          {totals.next ?? totals.total ?? 0}
        </span>
      </div>
      <div className="button-grid">
        <CalcBtn myFunc={handleClick} buttonName="AC" buttonClasses="btn clear" id="clear" />
        <CalcBtn myFunc={handleClick} buttonName="+/-" buttonClasses="btn plusMinus" id="plus-minus" />
        <CalcBtn myFunc={handleClick} buttonName="%" buttonClasses="btn percent" id="percent" />
        <CalcBtn myFunc={handleClick} buttonName="÷" buttonClasses="btn divide red" id="divide" />
        <CalcBtn myFunc={handleClick} buttonName="7" buttonClasses="btn seven" id="seven" />
        <CalcBtn myFunc={handleClick} buttonName="8" buttonClasses="btn eight" id="eight" />
        <CalcBtn myFunc={handleClick} buttonName="9" buttonClasses="btn nine" id="nine" />
        <CalcBtn myFunc={handleClick} buttonName="x" buttonClasses="btn multiply red" id="multiply" />
        <CalcBtn myFunc={handleClick} buttonName="4" buttonClasses="btn four" id="four" />
        <CalcBtn myFunc={handleClick} buttonName="5" buttonClasses="btn five" id="five" />
        <CalcBtn myFunc={handleClick} buttonName="6" buttonClasses="btn six" id="six" />
        <CalcBtn myFunc={handleClick} buttonName="-" buttonClasses="btn subtract red" id="subtract" />
        <CalcBtn myFunc={handleClick} buttonName="1" buttonClasses="btn one" id="one" />
        <CalcBtn myFunc={handleClick} buttonName="2" buttonClasses="btn two" id="two" />
        <CalcBtn myFunc={handleClick} buttonName="3" buttonClasses="btn three" id="three" />
        <CalcBtn myFunc={handleClick} buttonName="+" buttonClasses="btn plus red" id="add" />
      </div>
      <div className="bottom-container">
        <CalcBtn myFunc={handleClick} buttonName="0" buttonClasses="btn zero" id="zero" />
        <CalcBtn myFunc={handleClick} buttonName="." buttonClasses="btn decimal" id="decimal" />
        <CalcBtn myFunc={handleClick} buttonName="=" buttonClasses="btn equals red" id="equals" />
      </div>
    </div>
  );
};

export default Calculator;
