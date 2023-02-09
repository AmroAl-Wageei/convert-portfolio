import React, { Component } from 'react'

 class Education extends Component {
  render() {
    return (


      <section className="education">
      <section id="edu99"> 
        <br />
        <br />
        <br />
        <h3 id="line"> <span> Education </span> </h3>
        <div className="education_section">
          <div className="shadow-lg p-3 mb-5 bg-body rounded col-sm">
            <div className="orangecoding col-sm ">
              <div className="card" style={{width: '18rem'}}>
                <img src={require('./Images/OrangeCoding.png')} className="card-img-top-orange" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">  Orange Coding Academy </h5>
                  <p className="card-text">Internship As a Full-stack web developer</p>
                  <p> " HTML5 | Css | JavaScript | PHP | Reacts | SQL | Laravel | Redux | Drupal "</p>
                  <p className="card-text"> 2022 - 2023 </p>
                  <a href="Document's/Python_-_Beginner_Certificate_of_completion.pdf" className="btn btn-primary" target="_blank">In Process...</a>
                </div>
              </div>
            </div>
          </div>
          <div className="aut col-sm">
            <div className="shadow p-3 mb-5 bg-body rounded">
              <div className="card" style={{width: '18rem'}}>
                <img src={require('./Images/Aqaba-University-of-Technology.webp')}  className="card-img-top-aut" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> Aqaba University Of Technology </h5>
                  <p className="card-text"> Bachelor Degree in Software Engineering
                    At - Aqaba University Of Technology </p>
                  <p className="card-text">Grade : ( Very Good - 79 . 6 / 100 )</p>
                  <p className="card-text"> 2016 - 2021 </p>
                  <a href="Document's/Cert_Bachelor.jpeg" className="btn btn-primary" target="_blank">Certificate</a>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow p-3 mb-5 bg-body rounded">
            <div className="ittihadschool col-sm "> 
              <div className="card" style={{width: '18rem'}}>
                <img src={require('./Images/ittihad.jfif')} className="card-img-top-ittihad" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> Al-Ittihad Secondary Schools - Aqaba </h5>
                  <p className="card-text"> Informaton Technology Branch </p>
                  <p className="card-text"> Grade ( 72.2 / 100 ) </p>
                  <p className="card-text"> 2014 - 2015</p>
                  <a href="Document's/Cert_High_School.jpeg" className="btn btn-primary" target="_blank">Certificate</a>
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

export default Education