import React, { Component } from 'react'

 class Courses extends Component {
  render() {
    return (
      
      <section className="course">
        <section id="cour99">
          <br />
          <br />
          <br />
          <br />
          <h3> <span> Courses </span> </h3>
          <div className="course-section">
            <div className="rowcourse">
              <div className="colcourse1">
                <div className="card border-secondary mb-3" style={{maxWidth: '18rem'}}>
                  <div className="card-header">Python</div>
                  <div className="card-body text-secondary1">
                    <h5 className="card-title"> Orange Coursat </h5>
                    <p className="card-text"> Subject : STATEMENTS, SYNTAX, COMMENTS, AND VARIABLES | IF ELSE, LOOPS | ARRAYS , LISTS, TUPLES, AND SETS + DICTIONARIESH5P  | </p>
                    <p className="card-text"> Tools : Trinket </p>
                    <span id="ent">↓</span>
                    <a href="Document's/Python_-_Beginner_Certificate_of_completion.pdf" target="_blank">
                      <p><i className="fa-brands fa-python" /></p></a>
                  </div>
                </div>
              </div>
              <div className="colcourse1">
                <div className="card border-secondary mb-3" style={{maxWidth: '18rem'}}>
                  <div className="card-header"> CCNA </div>
                  <div className="card-body text-secondary1">
                    <h5 className="card-title">CISCO &amp; PSUT</h5>
                    <p className="card-text">Subject : Network Fundamentals , LAN Switching Technologies , Routing Technologies , WAN Technologies , Infrastructure Services , Infrastructure Security ,
                      Infrastructure Management</p>
                    <p className="card-text"> Tools : CISCO </p>
                    <span id="ent">↓</span>
                    <a href="Images/CCNA.png" target="_blank"> <p><i className="fa-solid fa-network-wired" /></p></a>
                  </div>
                </div>
              </div>
              <div className="colcourse1">
                <div className="card border-secondary mb-3" style={{maxWidth: '18rem'}}>
                  <div className="card-header"> ISTQB </div>
                  <div className="card-body text-secondary1">
                    <h5 className="card-title">The Hope International Company</h5>
                    <p className="card-text"> Subject : The Fundamentals of testing | Testing throughout the life-cycle | Static testing | Test design techniques | Test Management </p>
                    <p className="card-text"> Tools : Postman , JIRA </p>
                    <span id="ent">↓</span>
                    <a href="Images/OIP.jfif" target="_blank">
                      <p><i className="fa-solid fa-bug" /></p>
                    </a> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default Courses