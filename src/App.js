import logo from './logo.svg';
import './App.css';
import Router from './Router/Router';
import LoginUser from './Context/Context';
import { useState } from 'react';

function App() {
  const [data, setdata] = useState([]);
  return (
    <div className="App">
      <LoginUser.Provider value={[data, setdata]}>
        <Router />
      </LoginUser.Provider>
    </div>
  );
}

export default App;
