import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import OpenJobs from './job-portal-components/open-jobs/OpenJobs';
import CandidateDetails from './job-portal-components/candidate-details/CandidateDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} />
         <h1 className="App-title">Squashers Job Portal</h1>
        </header>
       
         
		<OpenJobs/>
		<CandidateDetails/>
      </div>
    );
  }
}

export default App;
