import React, { Component } from 'react'

 class AboutUs extends Component {
  render() {
    return (

      
      <section className="about">
      <section id="aboutme99">
        <div className="about-section"> 
          <img src={require('./Images/amro5.jpeg')} />
          <div className="small_cont"> 
            <h5 id="aboutme99"> About Me </h5>
            <p className="text"> 
              A motivated and personable engineer pursuing a software QC testing career. Eager to join a great company that will
              assist in achieving my goals.
              As Quality Control Engineer in Software Testing, I aim to help establish quick and long-lasting relationships with
              customers and the team, and also assist in developing and implementing testing tools.
              Strong theoretical background in bug tracking, creating test plans and
              making test cases.
            </p>
            <div className="skillss">
              <span> Front-End Developer</span>
              <span> Quality Assurance "QA"</span>
              <span> CCNA " CISCO "</span>
            </div>
          </div>
        </div>
      </section>
    </section>
    
    )
  }
}

export default AboutUs