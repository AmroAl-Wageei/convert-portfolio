import React, { Component } from 'react'

 class Hobby extends Component {
  render() {
    return (
      
      <section className="hobby">
      <section id="hobby99">
        <h3> <span id="koby1"> HOBBY'S</span> </h3>
        <div className="cont">
          <div className="basketball">
            <b> <h4 id="baskethobby"> Basketball </h4></b>   
            <span>→</span> 
            <a href="Video/Videobasket.mp4" target="_blank">
              <img className="basket" src="https://upload.wikimedia.org/wikipedia/commons/7/72/Basketball_Clipart.svg" alt="" id="koby4" /> </a> 
            <span>←</span>
          </div>
          <div className="Videokoby"> 
            <h4 id="koby"> This player who's inspire me! </h4>
            <iframe width={560} height={315} src="https://www.youtube.com/embed/GhNhWsv3NlY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen id="kobe" control auto-play muted />
          </div>
        </div>
      </section>
    </section>
    )
  }
}

export default Hobby
