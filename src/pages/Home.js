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
  useEffect(() => {
    getAboutData();
    getProjectsData();
  }, []);

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
        <p> I'm a 30 year old who studied software engineering in 2023. It's something i've long wanted to do and i'm proud of how much I got done. I did the course while working full time which had it's own challenges but thanks to my support network I made it through.</p><br></br>

        <p>I'm still working on my skill level, which will be reflected in the ever changing nature of my potfolio. This isn't a CV though, I just want to let you know who I am.</p><br></br>

        <p>Just a few days before I started my course, my partner and I adopted a dog! {about.dog} was rescued from a shelter in Spain and she's our princess. She's a galgo, she's almost 2 years old and is equal parts really fast and fast asleep.</p><br></br>

        <p>At the weekends I play football for R.K.H.S.V Heer in Maastricht. I'm entering my third season with the team having won the league in my first season, getting promoted and finishing second the next. I covered in goal during the end of the season and managed to pick up "Goalkeeper of the season" at the end of year awards. We are looking forward to our first season in the 4th Klasse.</p><br></br>

        <p>Beyond sport, work and my family I love to travel. Whether it's a solo trip, visiting friends of travelling with my partner getting away from where I'm based for a while is unbeatable. I've currently travelled to 40 different countries and i'm not looking to stop. My most recent trip was to Canada and the United states. in 2 weeks I flew to Toronto to watch the Maple Leafs play and see Niagra falls, then a flight to Chicago to explore the windy city. Next a drive to Cincinnati with a stop off at Casey to see the worlds largest rocking chair. I spent my birthday in Cincinnati watching the Bengals beat the Falcons before ending my trip with a few days in New York eating $1 pizza's. Next stop; Wales.</p>
      </section>
      <div id="Projects">
        <p className="titles">Projects.</p></div>
      <div className="container">
        <div className="columns is-multiline equal-height-cards">
          {projects !== null && projects.map((project) => (
            <div key={project.id} className="column is-one-third">
              <div className="card">
                <div className="card-content">
                  <h1 className="title has-text-black">{project.name}</h1>
                  <img src={project.image} className="project-image"/>
                  <div className="buttons">
                  {project.git && (
                <a href={project.git} className="button is-primary">
                  Github
                </a>
              )}
              {project.live && (
                <a href={project.live} className="button is-primary">
                  Live site
                </a>
              )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    

  );
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
