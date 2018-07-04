import React, { Component } from 'react';
import './SearchJobs.css';

class SearchJobs extends Component {
	
	
	state = {
    skillSet: ''
  };
  
	searchJobs = () => {
   console.log('Called');
	this.callApi()
      .then(res => this.setState({ response: res}))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
	  
   console.log('Called1 -->' + this.state.skillSet);
	  fetch('/searchJobsDetails', {
        method: 'POST',
        data: {
          coreSkils: 'micro'
        }
      })
      .then(function(response) {
		  console.log(response);
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
  };
  
  handleSkillSetChange = (e) =>{
   this.setState({skillSet: e.target.value});
}
applyForJob = (jobId) => {
    console.log('value of id id -->', jobId);
	
  }

  render() {
    return (
	
	<div id="search">
                            <form > 

                                <h1> Search </h1> 
                                <p> 
                                    <label htmlFor="skillSet" className="uname" data-icon="u">Please Enter skill set to search:</label>
                                    <input id="skillSet" name="skillSet" required="required" type="text" placeholder="e.g. Java, React, Angular" value={this.state.skillSet} onChange={this.handleSkillSetChange}/>
                                </p>
                                                                
                                <p className="search"> 
									<input type="button" value="Search Jobs" onClick={(e)=>this.searchJobs()}/> 
								</p>
                                
                            </form>
                        </div>);
  }
}

export default SearchJobs;