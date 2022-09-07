import React from 'react';
import Logo from './assets/logo/logo.png';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <img src={Logo} width="150px"/>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Glii chunt de Pogi</h1>
            <p>Es wird aktuell an der Seite noch gearbeitet :(</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;