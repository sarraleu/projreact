import React from 'react';
import { Component } from "react";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      number1: '',
      number2: '',
      operation: '+',
      result: null,
    };
  }

  selectionner = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  calculer = () => {
    const { number1, number2, operation } = this.state;
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let result;

    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Erreur : division par zéro';
        break;
      default:
        result = 'Opération inconnue';
    }

    this.setState({ result });
  };

  render() {
    const { number1, number2, operation, result } = this.state;
    return (
      <div>
        <input
          type="number"
          name="number1"
          value={number1}
          onChange={this.selectionner}
          placeholder="Nombre 1"
        />
        <br /><br />
        <select name="operation" value={operation} onChange={this.selectionner}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <br /><br />
        <input
          type="number"
          name="number2"
          value={number2}
          onChange={this.selectionner}
          placeholder="Nombre 2"
        />
        <br /><br />
        <button onClick={this.calculer}>Calculer</button>
        <br /><br />
        <strong>Le Résultat est : </strong>{result}
      </div>
    );
  }
}

export default Calculator;