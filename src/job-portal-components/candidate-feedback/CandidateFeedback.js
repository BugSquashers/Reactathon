import React, { Component } from 'react';
import './CandidateFeedback.css';

class CandidateFeedback extends Component {
  render() {
    return (<form class="content-body" action="" autocomplete="on"> 

                                <h1> Register </h1> 
                                <p> 
                                    <label for="usernamesignup" className="uname" data-icon="u">Your username</label>
                                    <input id="usernamesignup" class="form-control" name="usernamesignup" required="required" type="text" placeholder="" />
                                </p>
                                <p> 
                                    <label for="emailsignup" className="youmail" data-icon="e" > Your email</label>
                                    <input id="emailsignup" class="form-control" name="emailsignup" required="required" type="email" placeholder="abc@gmail.com"/> 
                                </p>
								<p> 
                                    <label for="contactnumbersignup" className="contactnumbersignup">Your Contact Number </label>
                                    <input id="contactnumbersignup" class="form-control" name="contactnumbersignup" required="required" placeholder="9876543210"/>
                                </p>
                                <p> 
                                    <label for="fullnamesignup" className="fullnamesignup" data-icon="p">Your Name </label>
                                    <input id="fullnamesignup" class="form-control" name="fullnamesignup" required="required" placeholder=""/>
                                </p>
								<p> 
                                    <label for="agesignup" className="agesignup">Your Age </label>
                                    <input id="agesignup" class="form-control" name="agesignup" required="required" placeholder="25"/>
                                </p>
								<p> 
                                    <label for="highestqualsignup" className="highestqualsignup">Your Highest Qualification </label>
                                    <input id="highestqualsignup" class="form-control" name="highestqualsignup" required="required" placeholder="B. Tech"/>
                                </p>
								<p> 
                                    <label for="skillssignup" className="skillssignup">Your Skills </label>
                                    <input id="skillssignup" class="form-control" name="skillssignup" required="required" placeholder="Java, J2EE"/>
                                </p>
								<p> 
                                    <label for="experiencesignup" className="experiencesignup">Your Experience </label>
                                    <input id="experiencesignup" class="form-control" name="experiencesignup" required="required" placeholder="3"/>
                                </p>
                                
                                <p className="signin button"> 
									<input type="submit" value="Sign up"/> 
								</p>
                                
                            </form>);
  }
}

export default CandidateFeedback;