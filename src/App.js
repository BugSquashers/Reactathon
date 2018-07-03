import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import OpenJobs from './job-portal-components/open-jobs/OpenJobs';
import CandidateDetails from './job-portal-components/candidate-details/CandidateDetails';
import HRFeedback from './job-portal-components/hr-feedback/HRFeedback';
import CandidateFeedback from './job-portal-components/candidate-feedback/CandidateFeedback';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} />
         <h1 className="App-title">Squashers Job Portal</h1>
        </header>
       
         
		<OpenJobs></OpenJobs>
		<CandidateDetails></CandidateDetails>
		<HRFeedback></HRFeedback>
		<CandidateFeedback></CandidateFeedback>
      </div>
    );
  }
}

export default App;
