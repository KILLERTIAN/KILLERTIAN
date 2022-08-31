import React from 'react';
// import '../../App.css';
import './About.css';
import AboutCard from './about-card';
// import VanillaTilt from 'react-vanilla-tilt';


// VanillaTilt.init(document.querySelectorAll(".proCards"), {
//   max: 25,
//   speed: 400
// });


// VanillaTilt.init(document.getElementsByTagName("AboutCard"), {
//   max: 25,
//   speed: 400,
//   glare: true,
//   'max-glare': 0.1,
// })


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
            text='Simple Pespi Landing page designed mainly using HTML and CSS ans basic Javascript.'
            siteText='Visit Site'
            src="https://user-images.githubusercontent.com/77867638/185983512-499e79db-c773-45e8-bc3b-f8c5957e1cab.png"
            href='https://killertian.github.io/Pepsi-Landing-page/'
          />

          <AboutCard
            no='02'
            noName='Project Two'
            text='Intermediate use of CSS to create double vertical sliding feature in the project.'
            siteText='Visit Site'
            href='https://killertian.github.io/Double-Vertical-Slider/'
            src="https://user-images.githubusercontent.com/77867638/185458496-bc1d9d2a-6cf3-43d9-bb9a-f6610e44dadd.png"
          />
          <AboutCard
            no='03'
            noName='Project Three'
            text='Simple KFC Landing Page made using basic HTML,CSS and Javasacript.'
            siteText='Visit Site'
            src="https://user-images.githubusercontent.com/77867638/187237418-70acd4c1-1636-4530-97c7-2ddb9add4938.png"
            href='https://killertian.github.io/KFC/'
          />
          <AboutCard
            no='04'
            noName='Project Four'
            text='Basic webpage with a use of video as background and nice menu animation using basic HTML,CSS AND JavaScript.'
            siteText='Visit Site'
            src="https://user-images.githubusercontent.com/77867638/185459743-5ae27a49-1d29-4def-a83c-86ce63d87dac.png"
            href='https://killertian.github.io/TRAVEL-Landing-Page/'
          />
          {/* <div className='proCards'>
            <div className="cardcontainer">
              <h2>05</h2>
              <h3>Project Five</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae natus esse, dicta ex eius velit dolorum iste quibusdam distinctio repellat aliquid omnis rerum, officiis consequuntur! Ab facilis suscipit distinctio dignissimos.</p>
              <a href="#">Visit Site</a>
            </div>
          </div> */}
        </div>
      </div>




    </body >


  );
}
export default About;