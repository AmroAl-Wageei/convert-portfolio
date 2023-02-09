import React, { Component } from 'react'
// import  Logo  from "./Images/LOGOAMRO.png";

 class Navbar extends Component {
  render() {
    return (



      <div className="hero"> 
        <header> 
          <nav className="nav_bar">
            <img src={require("./Images/LOGOAMRO.png")} alt="Me" className="logo" />
            <ul>
              <li> <a href="#aboutme99"> ABOUT ME</a></li>
              <li> <a href="#exper99"> EXPERINCE</a></li>
              <li> <a href="#edu99"> EDUCATION </a></li>
              <li> <a href="#pro99"> PROJECT </a></li>
              <li> <a href="#cour99"> COURSES</a></li>
              <li> <a href="#free99">FREELANCE </a></li>
              <li> <a href="#skills99"> SKILLS</a></li>
              <li> <a href="#lang99"> LANGUAGES</a></li>
              <li> <a href="#hobby99"> HOBBY </a></li>
              <li> 
              </li>
            </ul>
          </nav>
          <div className="drop">
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-dark p-4">
                <p> <a className="darkbar" href="#aboutme99"> ABOUT ME </a> </p>
                <p> <a className="darkbar" href="#exper99"> EXPERINCE </a> </p>
                <p> <a className="darkbar" href="#edu99"> EDUCATION </a> </p>
                <p> <a className="darkbar" href="#pro99"> PROJECT </a> </p>
                <p> <a className="darkbar" href="#cour99"> COURSES </a> </p>
                <p> <a className="darkbar" href="#free99"> FREELANCE </a> </p>
                <p> <a className="darkbar" href="#skills99"> SKILLS </a> </p>
                <p> <a className="darkbar" href="#lang99"> LANGUAGES </a> </p>
                <p> <a className="darkbar" href="#hobby99"> HOBBY </a> </p>
              </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
              </div>
            </nav>
          </div>
        </header>
      </div>

      
    )
  }
}


export default Navbar