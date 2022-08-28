import React from 'react';
// import '../../App.css';
import './About.css';
import AboutCard from './about-card';

function About() {
  return (
    <body>
      <div className='section'>
        <div className="text">
          <h1 className='title'>About Me
          </h1>
          <p>Hello,I am Om Sharma .I am 17 and like to play games and try out new and amazing things all the time.</p>
          <br />
          <p>This is one of the projects I made to test my skills in spare time .I hope you like my hardwork.</p>
          <div className="subHeading">
            <a className='projects'
              href="https://github.com/KILLERTIAN">My Projects
            </a>
          </div>
        </div>
        <div className="container">
          <AboutCard
            no='01'
            noName='Project One'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae natus esse, dicta ex eius velit dolorum iste quibusdam distinctio repellat aliquid omnis rerum, officiis consequuntur! Ab facilis suscipit distinctio dignissimos.'
            siteText='Visit Site'
            src="https://user-images.githubusercontent.com/77867638/185983512-499e79db-c773-45e8-bc3b-f8c5957e1cab.png"
          />
          <AboutCard
            no='02'
            noName='Project Two'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae natus esse, dicta ex eius velit dolorum iste quibusdam distinctio repellat aliquid omnis rerum, officiis consequuntur! Ab facilis suscipit distinctio dignissimos.'
            siteText='Visit Site'
            src="https://user-images.githubusercontent.com/77867638/185983512-499e79db-c773-45e8-bc3b-f8c5957e1cab.png"
          />
          <AboutCard
            no='03'
            noName='Project Three'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae natus esse, dicta ex eius velit dolorum iste quibusdam distinctio repellat aliquid omnis rerum, officiis consequuntur! Ab facilis suscipit distinctio dignissimos.'
            siteText='Visit Site'
            src="https://user-images.githubusercontent.com/77867638/185983512-499e79db-c773-45e8-bc3b-f8c5957e1cab.png"
          />
          <AboutCard
            no='04'
            noName='Project Four'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae natus esse, dicta ex eius velit dolorum iste quibusdam distinctio repellat aliquid omnis rerum, officiis consequuntur! Ab facilis suscipit distinctio dignissimos.'
            siteText='Visit Site'
            src="https://user-images.githubusercontent.com/77867638/185983512-499e79db-c773-45e8-bc3b-f8c5957e1cab.png"
          />
          <div className='proCards'>
            <div className="cardcontainer">
              <h2>05</h2>
              <h3>Project Five</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae natus esse, dicta ex eius velit dolorum iste quibusdam distinctio repellat aliquid omnis rerum, officiis consequuntur! Ab facilis suscipit distinctio dignissimos.</p>
              <a href="#">Visit Site</a>
            </div>
          </div>
          
          
        </div>
      </div>
    </body >


  );
}
export default About;