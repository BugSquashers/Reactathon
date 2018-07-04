import React, { Component } from 'react';
import './ScheduleInterview.css';

class ScheduleInterview extends Component {
  render() {
    return (<form class="content-body" action="" autocomplete="on"> 

                                <h1> Schedule A Interview </h1> 
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
                                    <label htmlFor="interviewdate" className="interviewdate">Interview Date*</label>
                                    <input id="interviewdate" name="interviewdate" required="required" type="text" placeholder="Interview Date" />
                                </p>
								
								<p> 
                                    <label htmlFor="interviewtime" className="interviewtime">Interview Time*</label>
                                    <input id="interviewtime" name="interviewtime" required="required" type="text" placeholder="Interview Time" />
                                </p>
								
								<p> 
                                    <label htmlFor="interviewername" className="interviewername">Interviewer Name*</label>
                                    <input id="interviewername" name="interviewername" required="required" type="text" placeholder="Interviewer Name" />
                                </p>
                                


								 



                                <p> 
									<input type="submit" value="Schedule Interview"/> 
								</p>
                                
                            </form>);
  }
}

export default ScheduleInterview;