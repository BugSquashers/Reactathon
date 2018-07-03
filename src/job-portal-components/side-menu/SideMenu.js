import React, { Component } from 'react';
//import logo from './logo.svg';
import './SideMenu.css';
import OpenJobs from '../open-jobs/OpenJobs';
import CandidateDetails from '../candidate-details/CandidateDetails';
import HRFeedback from '../hr-feedback/HRFeedback';
import CandidateFeedback from '../candidate-feedback/CandidateFeedback';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class SideMenu extends Component {
  render() {
    return (
	  <Router>
            <div>
               <ul>
                  <li><Link to={'/OpenJobs'}>Open Jobs</Link></li>
                  <li><Link to={'/CandidateDetails'}>Candidate Details</Link></li>
				  <li><Link to={'/HRFeedback'}>HR Feedback</Link></li>
				  <li><Link to={'/CandidateFeedback'}>Candidate Feedback</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/OpenJobs' component={OpenJobs} />
                  <Route exact path='/CandidateDetails' component={CandidateDetails} />
				  <Route exact path='/HRFeedback' component={HRFeedback} />
				  <Route exact path='/CandidateFeedback' component={CandidateFeedback} />
               </Switch>
            </div>
         </Router>
		 
    );
  }
}

export default SideMenu;
