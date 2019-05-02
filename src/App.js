import React from 'react';
import './App.css';
import 'bootstrap-css-only'
import './ui/style.css'
import Heder from './ui/navigation'
import Body from './ui/body'
// import state from './store/store'
function App(props) {
  return (
      <div className="container-fluid">
          <Heder />
          <Body state={props.state}/>
      </div>
  );
}

export default App;
