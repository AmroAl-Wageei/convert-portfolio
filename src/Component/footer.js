import React, { Component } from 'react'

 class footer extends Component {
  render() {
    return (

      <footer>
      <div className="footer"> 
        <div className="footer-content"> 
          <h4> Amro AL- Wageei</h4>
          <q>I've faild over and over and over again in my life and that is WHY I SUCCEED .  #Koby Bryant🏀 </q>
          <ul className="socialfooter">
            <li><a href="https://www.linkedin.com/in/amro-al-wageei-69a597160/" target="_blank"> <i className="fa-brands fa-linkedin"> </i> </a></li>
            <li><a href="https://twitter.com/AmroSal74277945" target="_blank"> <i className="fa-brands fa-twitter" /></a></li>
            <li><a href="https://www.instagram.com/creators_962/" target="_blank"> <i className="fa-brands fa-instagram"> </i> </a></li>
            <li><a href="https://wa.me/0799379762" target="_blank"> <i className="fa-solid fa-phone"> </i> </a></li>
            <li><a href="https://mail.google.com/mail/u/0/?pli=1#inbox" target="_blank"> <i className="fa-solid fa-at" /></a></li>
            <li><a href="https://github.com/AmroAl-Wageei?tab=packages" target="_blank"> <i className="fa-brands fa-github" /> </a></li>
          </ul>
        </div>
        <div className="footer-botoom">
          <p> Copyright © 2022 Orange Coding Academy . designed by <span> Amro Al-Wageei </span> </p>
        </div>
      </div>
    </footer>
    
    )
  }
}


export default footer