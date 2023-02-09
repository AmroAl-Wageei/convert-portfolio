import { Component } from 'react';
import './Component/App.css';
import './index.css';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import About from './Component/AboutUs';
import Experince from './Component/Experince';
import Education from './Component/Education';
import Courses from './Component/Courses';
import Freelance from './Component/Freelance';
import Skills from './Component/Skills';
import Languages from './Component/Languages';
import Hobby from './Component/Hobby';
import Slider from './Component/Slider';
import Footer from './Component/footer';



class  App extends Component {

  render () {

    return (

      <div className="App">

        <Navbar/>
        <Header/>
        <About/>
        <Experince/>
        <Education/>
        <Courses/>
        <Freelance/>
        <Skills/>
        <Languages/>
        <Hobby/>
        <Slider/>
        <Footer/>

      </div>
    );
  }
}

export default App;
