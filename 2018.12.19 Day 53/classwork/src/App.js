import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TicTacToe from './Tic tac toe/TicTacToe';
// import CurrencyConverter from './CurrencyConverter';
// import Clock from './Clock/Clock';
// import ShoppingList from './Form/ShoppingList';
// import UserCard from './Usercard/UserCard';
// import UserCardList from './Usercard/UserCardList';

class App extends Component {
  render() {
    return (
      <div>
        <TicTacToe></TicTacToe>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous"></link>
      </div>
    );
  }
}

export default App;
