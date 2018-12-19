import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import ShoppingList from './shoppingList';
// import ShoppingList2 from './shoppingList2';
// import CommentCard from './CommentCart.tsx';
// import Recipe from './Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weather from './Weather';

ReactDOM.render((
    <Weather DoW='Mon' max='-12' min='-54'></Weather>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
