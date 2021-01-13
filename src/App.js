import logo from './logo.svg';
import './App.css';
// import PropTypes from 'prop-types'
function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.{props.count}
        </p>
        <p onClick={()=>{props.changeCountReducerEvent({count: 1})}}>change count {props.count}</p>
        <p onClick={()=>{props.addCountReducerEvent({count: 1})}}>add count {props.addCount}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// App.propTypes = {
//   value: PropTypes.number.isRequired
// }

export default App;
