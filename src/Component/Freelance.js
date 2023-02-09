import React, { Component } from 'react'

 class Freelance extends Component {
  render() {
    return (

      <section className="Freelance">
      <section id="free99">
        <br />
        <br />
        <br />
        <br />
        <h3> <span> Freelance</span> </h3>
        <div className="feat" id="feat">
          <div className="contfree">
            <div className="box_creator">
              <div className="img-holder">
                <img src={require('./Images/Creators.jpeg')} alt="" id="img11" />
                <h4> Create CV &amp; LOGO </h4>
              </div>
            </div>
            <div className="textfree">
              <div id="textfree1">
                <q> <h4> Dont wait for opportunity , creat it 🤩 Your career start here 🎓</h4></q>
                <p> A page specialized in creating a professional resume and logo, and our team is present in more than one country such a " Jordan , Palastine and UAE . </p>
              </div>
              <div id="textfree2">
                <a href="https://www.instagram.com/creators_962/" target="_blank">
                  <button type="button" className="btn btn-secondary">
                    <i className="fa-brands fa-instagram" />
                  </button> </a>
                <a href="https://www.facebook.com/cvmakeramro" target="_blank">
                  <button type="button" className="btn btn-secondary">
                    <i className="fa-brands fa-square-facebook" />
                  </button> </a>
                <a href="https://khamsat.com/user/amro_alwageei" target="_blank">
                  <button type="button" className="btn btn-secondary">
                    <i className="fa-brands fa-bandcamp" />
                  </button> </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    
    )
  }
}


export default Freelance