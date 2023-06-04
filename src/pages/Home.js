import { useState, useEffect } from "react";

function About(props) {
  // create state to hold about data
  const [about, setAbout] = useState(null);
  const [projects, setProjects] = useState(null);

  // create function to make api call
  const getAboutData = async () => {

		// make api call and get response
    const response = await fetch("./about.json");

		// turn response into javascript object
    const data = await response.json();

		// set the about state to the data
    setAbout(data);
    
  };

  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getAboutData();
    getProjectsData();}, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div id="Home">
<section className="big-box">
  <div className="text-box">
    <p>Hi, I'm Ciaran.</p>
    <p>Welcome to my portfolio.</p>
  </div>
</section>


      <div id="About">
      <p className="titles">About me.</p> </div>
      <section className="bio">
      <p>----- THIS IS NOT TO BE KEPT THIS WAS JUST NOTES I WAS TAKING
       ----- Below you will have access to my previous work, all completed while studying at General Assembley. I currently work for Mercedes-Benz as a Logistics Specialist however I want to follow my passion and am looking to take a leap into the world of Software Engineering. I have a dog named {about.dog} and she takes up most of my life now. She's a black Galgo and I love her to pieces. I play football in my spare time and when i'm feeling less active like to relax by playing video games, original I know.  Ciaran Kearney graduated from General Assembley with a qualification in May 2023. He enjoys working in full-stack developments and looks forward to improving his skills in order to both excell at his chosen career and also to be able to work on passion projects.</p></section>
      <div id="Projects">
      <p className="titles">Projects.</p></div>
    <div className="container">
      <div className="columns is-multiline">
        {projects.map((project) => (
          <div key={project.id} className="column is-one-third">
            <div className="card">
              <div className="card-content">
                <h1 className="title has-text-white">{project.name}</h1>
                <img src={project.image} alt={project.name} />
                <div className="buttons">
                  <a href={project.git} className="button is-primary">
                    Github
                  </a>
                  <a href={project.live} className="button is-primary">
                    Live site
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
