import React, { Component } from 'react';
import './CandidateFeedback.css';

class CandidateFeedback extends Component {
  render() {
    return (<form class="content-body" action="" autocomplete="on"> 

                                <h3> Candidate Feedback </h3> 
                                
								 <p> 
                                    <label htmlFor="jobid" className="jobid">Job Id*</label>
                                    <input id="jobid" className="form-control" name="jobid" required="required" type="text" disabled="true"/>
                                </p>
								
								<p> 
                                    <label htmlFor="jobstatus" className="jobstatus">Status*</label>
                                    <input id="jobstatus" className="form-control" name="jobstatus" required="required" type="text" disabled="true"/>
                                </p>
								
								
								<p> 
                                    <label htmlFor="candidatefeedback" className="candidatefeedback">Feedback*</label>
									
									<textarea id="candidatefeedback" className="form-control" name="candidatefeedback" required="required" placeholder="Please enter feedback."  rows="4" cols="50">
</textarea>


                                   
                                </p>
								
								<p> 
                                    <label htmlFor="documents" className="documents">Upload Documents*</label>
									
								<input id="documents" className="form-control" name="documents"  type="file" multiple/>
								</p>
								
                               <p className="signin button" align="right"> 
									<input type="submit" className="btn btn-success" value="Submit Feedback"/> 
								</p>
                                
                            </form>);
  }
}

export default CandidateFeedback;