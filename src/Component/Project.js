import React, { Component } from 'react'

 class Project extends Component {
  render() {
    return (
      
      <section className="Project">
        <section id="pro99">
          <br />
          <br />
          <br />
          <br />
          <h3> <span> Project</span> </h3>
          <div className="features" id="features">
            <div className="container">
              <div className="box_CCNA">
                <div className="img-holder">
                  <img src="Images/overjoyed-african-man-raised-hands-up-guy-glasses-excited-happy-good-news-deal-looks-laptop-screen-triumph-187879697.jpg" alt="" id="img3" />
                </div>
                <h4> Amro Portfolio </h4>
                <p> Creative web developer looking for interesting technologies that challenge me to grow professionally and
                  Cultivated knowledge of HTML, CSS, JavaScript and QA </p>
                <a href="https://miro.com/app/board/uXjVPJJlDUk=/" target="_blank"> <button type="button" className="btn btn-secondary">
                    Mock Up </button> </a> &amp;
                <a href="https://miro.com/app/board/uXjVPJLqtf0=/" target="_blank"> <button type="button" className="btn btn-secondary">
                    WireFrame </button>
                </a>
              </div>
              <div className="box_cyber">
                <div className="img-holder">
                  <img src="Images/istockphoto-1202768589-640x640.jpg" alt="" id="img2" />
                </div>
                <h4> DBLG Project</h4>
                <p> A Site for technical educational courses, for the most requested sections such as coding  and testing </p>
                <p> </p><h4>DBLG → D " Discover " , B " Book " , L " Learn " G " Get Certified "</h4> <p />
                <a href="https://miro.com/app/board/uXjVPOHa-UA=/" target="_blank"> <button type="button" className="btn btn-secondary">
                    Mock Up | WireFrame </button> </a> 
              </div>
              <div className="box_quality">
                <div className="img-holder">
                  <img src="Images/cheerful-african-american-male-student-worker-watching-online-lectures-webinars-writing-notes-notebook-black-guy-187877894.jpg" alt="" id="img1" />
                </div>
                <h4> Smart Scientific Journal </h4>
                <p> A scientific journal for research linked to the Aqaba University of Technology website, which benefits students
                  and
                  doctors inside the university . </p>
                <a href="http://www.graduationprojects.eu/" target="_blank">
                  <button type="button" className="btn btn-secondary">Grad
                    Project</button> </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default Project