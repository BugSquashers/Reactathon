import React, { Component } from 'react';
import './OpenJobs.css';

class OpenJobs extends Component {
	

  state = {
    response: []
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/listJobDetails');
	
    const body = await response.json();
	
    if (response.status !== 200) throw Error(body.message);

    return body;
  };
	
	applyForJob = (jobId) => {
    console.log('value of id id -->', jobId);
	
  }
	
	render() {
    const response = this.state.response.map((item, i) => (
      <tr>
        <td>{ item.jobId }</td>
		<td>{ item.coreSkils }</td>
		<td>{ item.position }</td>
		<td>{ item.location }</td>
		<td>{ item.noOfOpenings }</td>
		<td><input type="button" value="Apply" onClick={(e)=>this.applyForJob(item.jobId, e)}/></td>
      </tr>
    ));

    return (
      <table border="1">
		<thead>
			<tr>
				
				<th>Job Id</th>
				<th> Core Skills</th>
				<th> Position</th>
				<th> Location</th>
				<th>No of Openings</th>
				<th>Apply</th>
			</tr>
		</thead>
		<tbody>{ response }</tbody>
	  </table>
    );
	
  }
	
  
  
}

export default OpenJobs;