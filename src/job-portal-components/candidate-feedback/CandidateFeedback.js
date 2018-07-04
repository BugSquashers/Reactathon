import React, { Component } from 'react';
import './CandidateFeedback.css';

class CandidateFeedback extends Component {
  render() {
    return (<form class="content-body" action="" autocomplete="on"> 

                                <h1> Candidate Feedback </h1> 
                                
								 <p> 
                                    <label htmlFor="jobid" className="jobid">Job Id*</label>
                                    <input id="jobid" name="jobid" required="required" type="text" disabled="true"/>
                                </p>
								
								<p> 
                                    <label htmlFor="jobstatus" className="jobstatus">Status*</label>
                                    <input id="jobstatus" name="jobstatus" required="required" type="text" disabled="true"/>
                                </p>
								
								
								<p> 
                                    <label htmlFor="candidatefeedback" className="candidatefeedback">Feedback*</label>
									
									<textarea id="candidatefeedback" name="candidatefeedback" required="required" placeholder="Please enter feedback."  rows="4" cols="50">
</textarea>


                                   
                                </p>
								
								<p> 
                                    <label htmlFor="documents" className="documents">Upload Documents*</label>
									
								<input id="documents"  name="documents"  type="file" multiple/>
								</p>
								
                               <p className="signin button"> 
									<input type="submit" value="Submit Feedback"/> 
								</p>
                                
                            </form>);
  }
}

export default CandidateFeedback;