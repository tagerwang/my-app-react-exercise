import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, connect } from "react-redux"
import store from "./redux/store"
import {changeCount, addCount} from "./redux/actions"
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// Map Redux state to component props
function mapStateToProps(state) {
  const {changeCountReducer, addCountReducer} = state
  return {
    value: changeCountReducer.value,
    count: changeCountReducer.count,
    addCount: addCountReducer.count
  }
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    changeCountReducerEvent: (data) => dispatch(changeCount(data)),
    addCountReducerEvent: (data) => dispatch(addCount(data)),
  }
}
// Connected Component
const AppRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
ReactDOM.render(
  <Provider store={store}>
    <AppRedux />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
