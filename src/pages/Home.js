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
    <><div id="Home">
      <section className="big-box">
        <div className="text-box">
          <p>Hi, I'm Ciaran.</p>
          <p>Welcome to my portfolio.</p>
        </div>
      </section>


      <div id="About">
        <p className="titles">About me.</p> </div>
      <section className="bio">
        <p>I'm a 30 year old who studied software engineering in 2023. It's something I've long wanted to do and I'm proud of how much I got done. I did the course while working full time which had its own challenges but thanks to my support network I made it through.</p><br></br>

        <p>I'm still working on my skill level, which will be reflected in the ever changing nature of my portfolio. This isn't a CV though, I just want to let you know who I am.</p><br></br>

        <p>Just a few days before I started my course in February, my partner and I adopted a dog! {about.dog} was rescued from a shelter in Spain and she's our princess. She's a galgo, she's almost 2 years old and is equal parts really fast and fast asleep.</p><br></br>

        <p>On the weekends I play football for R.K.H.S.V Heer in Maastricht. I'm entering my third season with the team having won the league in my first season, getting promoted and finishing second the next. I covered in goal during the end of the season and managed to pick up "Goalkeeper of the season" at the end of year awards. We are looking forward to our first season in the 4th Klasse.</p><br></br>

        <p>Beyond sport, work and my family I love to travel. Whether it's a solo trip, visiting friends or travelling with my partner, getting away from where I'm based for a while is unbeatable. I've currently travelled to 43 different countries and I'm not looking to stop. My most favourite trip so far was to Canada and the United states. In 2 weeks, I flew to Toronto to watch the Maple Leafs play and see Niagara falls, then a flight to Chicago to explore the windy city. Next a drive to Cincinnati with a stop off at Casey to see the world's largest rocking chair. I spent my birthday in Cincinnati watching the Bengals beat the Falcons before ending my trip with a few days in New York eating $1 pizzas. <br></br>
        
        On my most recent trip, I went to Riga, Helsinki and Tallinn with my partner. On the 10th September I took part in the Tallinn marathon completing it in 4:41:11.</p>
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
                  <img src={project.image} className="project-image" />
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
    </div><div>
        <section>
        <div>
    <div class="container">
	<div class="row">
			<h1><br></br>Looking to contact me?</h1>
	</div>
	<div class="row">
  <h4 style={{ textAlign: 'center' }}>I'd love to hear from you!</h4>
	</div>
  <form action="https://formsubmit.co/ckearney1992@gmail.com" method="POST" >
	<div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" name="name" required />
					<label>Name</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input type="text" name="email" required />
					<label>Email</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input" style={{float: 'right'}}>
					<input type="text"  />
					<label>Phone Number (optional)</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea name="message" required></textarea>
					<label>Message</label>
				</div>
			</div>
      <input type="hidden" name="_next" value="https://kearmododragon.com" /> 
      <input type="hidden" name="_captcha" value="false" />
			<div class="col-xs-12">
      <button style={{ backgroundColor: '#1E90FF', borderRadius: '5px', padding: '10px 20px', color: '#fff', border: 'none' }}>Send Message</button>

			</div>

	</div>
  </form>
</div></div>
        </section>
      </div></>
);
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
