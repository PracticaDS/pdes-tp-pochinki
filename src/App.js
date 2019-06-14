import React from 'react';
import './App.css';
// import Fabrica from './containers/FabricaContainer';
import Login from './components/Login';

const App = () => {
    return (
      <div className="App">
        <div className="tab">
          {/* <Fabrica></Fabrica> */}
          <Login></Login>
        </div>
        
      </div>
    );
  }


export default App;
