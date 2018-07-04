import React, { Component } from 'react';
import './HRFeedback.css';

class HRFeedback extends Component {
  render() {
    return (<form class="content-body" action="" autocomplete="on"> 

                                <h1> Feedback </h1> 
                               
							   
							   <p> 
								<label htmlFor="jobid" className="jobid">Select Job*</label>
								<select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
</p>



							   <p> 
								<label htmlFor="selectcandidate" className="selectcandidate">Select Candidate*</label>
								<select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
</p> 

<p> 
								<label htmlFor="candidatestatus" className="candidatestatus">Select Status*</label>
								<select>
  <option value="volvo">Rejected</option>
  <option value="saab">Selected</option>
  
</select>
</p> 


<p> 
                                    <label htmlFor="interviewerfeedback" className="interviewerfeedback">Interviewer Feedback*</label>
									
									<textarea id="interviewerfeedback" name="interviewerfeedback" required="required" rows="4" cols="50" disabled="true">
</textarea>


                                   
                                </p>
								
								
<p> 
                                    <label htmlFor="hrfeedback" className="hrfeedback">Feedback*</label>
									
									<textarea id="hrfeedback" name="hrfeedback" required="required" placeholder="Please enter feedback."  rows="4" cols="50">
</textarea>


                                   
                                </p>


                                
                                <p className="signin button"> 
									<input type="submit" value="Submit Feedback"/> 
								</p>
                                
                            </form>);
  }
}

export default HRFeedback;