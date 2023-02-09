import React, { Component } from 'react'
 class Experince extends Component {
  render() {
    return (
      <section id="exper99">
      <h3> <span> Experince </span> </h3>
      <section className="exptest" id="exper99">
        <div className="conttest">
          <div className="boxtest" id="autt">
            <h2> <img src={require('./Images/test22.webp')} alt="aut" id /></h2>
            <br />
            <h4><b> Aqaba-University-of-Technology </b></h4>
            <br />
            <p><q> Training material at the end of the fourth year at the same university </q></p>
            <br />
            <p> From : 9.2020 - 2.2021 </p>
          </div>
          <div className="boxtest" id="crystel">
            <h4> Position : IT Help Desk </h4>
            <h4> Requirements : ↓</h4>
            <br />
            <p>♦ Assists in training computer users.</p>
            <p> ♦ Maintains daily optimal performance of computer systems.</p>
            <p>♦ Interacts with network services.</p>
            <p> ♦ Documents, tracks, and examine problems to ensure timely solutions.</p>
            <p> ♦ Walk the customer through the problem-solving process</p>
            <p> ♦ Determine the best solution based on the issue and details provided by customers</p>
          </div>
        </div>
      </section>
    </section>
    )
  }
}



export default Experince