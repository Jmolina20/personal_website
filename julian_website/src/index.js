import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {

  name : "Madrid",
  country: "spain"
};


ReactDOM.render(
  <>
  <div id="test">
    <h2>{city.name} is in {city.country}</h2>
  </div>
  
  <div id="menu">Buttons go here, like
    <a href="https://media.giphy.com/media/3oEjHAUOqG3lSS0f1C/giphy.gif"> Github accomplishments</a>
    <a>Games, like "The last pineapple" </a>
    <a>Blog </a>
    <a>Per scholas projects</a>
  </div>
  <div id="elevator pitch">
    <p> My name is Julian, take a look around as you will find my contact info, 
      past projects and games I've developed.
    </p>
  
  <div id="resume">

    <ul>Skills:

    
        <ul>Front-end:
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Jquery</li>
        </ul>



    </ul>

  </div>

  </div>
  <div id="socials">
    <h3><a href="https://www.linkedin.com/in/julian-molina25/">Linkedin</a></h3>
    <h3><a href="https://github.com/Jmolina20">Github</a></h3>
    <h3>Twitter</h3>
  </div>





  </>
  ,document.getElementById("root")

)

