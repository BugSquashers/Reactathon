import React, { Component } from 'react';
import './HRFeedback.css';

class HRFeedback extends Component {
  render() {
    return (<form className="content-body" action="" autocomplete="on"> 

                                <h3> Feedback </h3> 
                               
							   
							   <p> 
								<label htmlFor="jobid" className="jobid">Select Job*</label>
								<select className="form-control">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
</p>



							   <p> 
								<label htmlFor="selectcandidate" className="selectcandidate">Select Candidate*</label>
								<select className="form-control">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
</p> 

<p> 
								<label htmlFor="candidatestatus" className="candidatestatus">Select Status*</label>
								<select className="form-control">
  <option value="volvo">Rejected</option>
  <option value="saab">Selected</option>
  
</select>
</p> 


<p> 
                                    <label htmlFor="interviewerfeedback" className="interviewerfeedback">Interviewer Feedback*</label>
									
									<textarea id="interviewerfeedback" className="form-control" name="interviewerfeedback" required="required" rows="4" cols="50" disabled="true">
</textarea>


                                   
                                </p>
								
								
<p> 
                                    <label htmlFor="hrfeedback" className="hrfeedback">Feedback*</label>
									
									<textarea id="hrfeedback" className="form-control" name="hrfeedback" required="required" placeholder="Please enter feedback."  rows="4" cols="50">
</textarea>


                                   
                                </p>


                                
                                <p className="signin button" align="right"> 
									<input type="submit" className="btn btn-success" value="Submit Feedback"/> 
								</p>
                                
                            </form>);
  }
}

export default HRFeedback;