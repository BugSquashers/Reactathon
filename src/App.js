import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

import SideMenu from './job-portal-components/side-menu/SideMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} />
         <h1 className="App-title">Verizon Job Portal</h1>
        </header>
       
         <SideMenu></SideMenu>
      </div>
    );
  }
}

export default App;

