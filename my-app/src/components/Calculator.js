/*  eslint eol-last: ["error", "always"]  */
import './calculator.css';
import React from 'react';
import calculate from '../logic/calculate';
import CalcBtn from './button';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.setState((state) => calculate(state, event.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-container">
        <input type="number" className="display" id="display" value={0} />
        <div className="display" id="display">
          {total}
          {operation}
          {next}
        </div>
        <div className="button-grid">
          <CalcBtn myFunc={this.handleClick} buttonName="AC" buttonClasses="btn clear" id="clear" />
          <CalcBtn myFunc={this.handleClick} buttonName="+/-" buttonClasses="btn plusMinus" id="plus-minus" />
          <CalcBtn myFunc={this.handleClick} buttonName="%" buttonClasses="btn percent" id="percent" />
          <CalcBtn myFunc={this.handleClick} buttonName="÷" buttonClasses="btn divide orange" id="divide" />
          <CalcBtn myFunc={this.handleClick} buttonName="7" buttonClasses="btn seven" id="seven" />
          <CalcBtn myFunc={this.handleClick} buttonName="8" buttonClasses="btn eight" id="eight" />
          <CalcBtn myFunc={this.handleClick} buttonName="9" buttonClasses="btn nine" id="nine" />
          <CalcBtn myFunc={this.handleClick} buttonName="x" buttonClasses="btn multiply orange" id="multiply" />
          <CalcBtn myFunc={this.handleClick} buttonName="4" buttonClasses="btn four" id="four" />
          <CalcBtn myFunc={this.handleClick} buttonName="5" buttonClasses="btn five" id="five" />
          <CalcBtn myFunc={this.handleClick} buttonName="6" buttonClasses="btn six" id="six" />
          <CalcBtn myFunc={this.handleClick} buttonName="-" buttonClasses="btn subtract orange" id="subtract" />
          <CalcBtn myFunc={this.handleClick} buttonName="1" buttonClasses="btn one" id="one" />
          <CalcBtn myFunc={this.handleClick} buttonName="2" buttonClasses="btn two" id="two" />
          <CalcBtn myFunc={this.handleClick} buttonName="3" buttonClasses="btn three" id="three" />
          <CalcBtn myFunc={this.handleClick} buttonName="+" buttonClasses="btn plus orange" id="add" />
        </div>
        <div className="bottom-container">
          <CalcBtn myFunc={this.handleClick} buttonName="0" buttonClasses="btn zero" id="zero" />
          <CalcBtn myFunc={this.handleClick} buttonName="." buttonClasses="btn decimal" id="decimal" />
          <CalcBtn myFunc={this.handleClick} buttonName="=" buttonClasses="btn equals orange" id="equals" />
        </div>
      </div>
    );
  }
}

export default Calculator;
