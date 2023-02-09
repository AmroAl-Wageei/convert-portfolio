import React, { Component } from 'react'

 class Languages extends Component {
  render() {
    return (
      <section>
      <section id="lang99">
        <h3> <span> Languages </span> </h3>
        <div className="contlang">
          <div className="lang_box">
            <div className="lang_title">
              <div className="lang_img">
                <img src={require('./Images/jordan_18174.png')} alt="" className="lang_icon" />
              </div>
              <h6>Arabic</h6>
              <h4> Mother Languages</h4>
            </div>
          </div>
          <div className="lang_box">
            <div className="lang_title">
              <div className="lang_img">
                <img src={require('./Images/usa_flag_united_states_america_icon_228698.png')} alt="" className="lang_icon" />
              </div>
              <h6>English</h6>
              <h4> Level " B2 "</h4>
            </div>
          </div>
          <div className="lang_box">
            <div className="lang_title" id>
              <div className="lang_img">
                <img src={require('./Images/germany_flag_icon_228675.png')} alt="" className="lang_icon" />
              </div>
              <h6> German</h6>
              <h4> Level A " A - Eines "</h4>
            </div>
          </div>
          <div className="lang_box">
            <div className="lang_title">
              <div className="lang_img">
                <img src={require('./Images/sweden_flag_flags_18089.png')} alt="" className="lang_icon" />
              </div>
              <h6> Swedan </h6>
              <h4> Level A " A - Ett "</h4>
            </div>
          </div>
        </div>
      </section>
    </section>
    )
  }
}

export default Languages