import React, { Component } from 'react'

 class Skills extends Component {
  render() {
    return (
      
      <section>
        <section id="skills99">
          <h3> <span> Skills </span> </h3>
          <div className="contskills">
            <div className="skills_box">
              <div className="skills_title">
                <div className="skills_img">
                  <img src={require('./Images/HTML.png')} alt="" className="skills_icon" />
                </div>
                <h6>HTML5</h6>
              </div>
            </div>
            <div className="skills_box">
              <div className="skills_title">
                <div className="skills_img">
                  <img src={require('./Images/CSS.png')} alt="" className="skills_icon" />
                </div>
                <h6>CSS3</h6>
              </div>      </div>
            <div className="skills_box">
              <div className="skills_title">
                <div className="skills_img">
                  <img src={require('./Images/java.png')} alt="" className="skills_icon" />
                </div>
                <h6>JavaScript</h6>
              </div>
            </div>
            <div className="skills_box">
              <div className="skills_title">
                <div className="skills_img">
                  <img src={require('./Images/Pythonlogo.png')} alt="" className="skills_icon" />
                </div>
                <h6>Python</h6>
              </div>
            </div>
            <div className="skills_box">
              <div className="skills_title" id="jira">
                <div className="skills_img">
                  <img src={require('./Images/jira.png')} alt="" className="skills_icon" />
                </div>
                <h6>JIRA Software</h6>
              </div>
            </div>
            <div className="skills_box">
              <div className="skills_title">
                <div className="skills_img">
                  <img src={require('./Images/what-is-scratch.png')} alt="" className="skills_icon" />
                </div>
                <h6>Scratch</h6>
              </div>
            </div>
          </div>
        </section>
      </section>
    )
  }
}


export default Skills;