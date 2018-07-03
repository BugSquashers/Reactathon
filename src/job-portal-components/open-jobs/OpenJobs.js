import React, { Component } from 'react';
import './OpenJobs.css';

class OpenJobs extends Component {
	
  state = {
    response: ''
  };

  serviceUrl: 'http://abc.com/abc'
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch(this.serviceUrl);
    const body = await response.json();
	
    if (response.status !== 200) throw Error(body.message);

    return body;
  };
	
	
  render() {
	 
    return (
      <div >
       
        <h2>Open Jobs page</h2>
		<p>{this.state.response}</p>
		
      </div>
    );
  }
}

export default OpenJobs;
