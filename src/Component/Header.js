import React, { Component } from 'react'
 class  Headers extends Component {
  render() {
    return (


    <div className="para"> 

            <h1>  I'm Amro <span> Al - Wageei </span> </h1>
            <br />
            <p> BootCamp As a <q> Full-Stack Web Developer </q>  <br />
            At - Orange Coding Academy </p>
            <a href="Document's/Amro Salahhuddin Othman Al-Wageei__CV.pdf" target="_blank"> View my CV | Resume </a> 
            <div id="socailcover">
            <p className="iconscover">
            </p><div id="iconscover2">  <i className="fa-solid fa-calendar-days" /> <span>  1 / 10 / 1997 </span> </div>
            <div id="iconscover3"> <i className="fa-solid fa-phone" /> <span> +962778096913</span> </div>
            <p />
            </div>
            <div className="img">
            <img src={require('./Images/cover.png')} alt="me" className="me" />
            </div>  

    </div>

    )
  }
}


export default Headers;