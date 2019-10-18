import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';


let reducer = (state=[], action)=> {
  if(action.type==="TrumpTweets"){
    return{...state, trumpTweets: action.trumpTweets}
  }
  if (action.type ==="HillaryTweets"){
    return{...state, hillaryTweets: action.hillaryTweets}
  }
    return state; // Needed because react-redux calls your reducer with an @@init action
  };


const store = createStore(
  reducer, // reducer
  {trumpTweets:[],hillaryTweets:[]}, // initial state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let content = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(content, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
