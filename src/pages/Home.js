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
        <p>Hello. I'm Ciaran, a 33 year old who studied software engineering in 2023. It's something I've long wanted to do and I'm proud of how much I got done. I did the course while working full time which had its own challenges but thanks to my support network I made it through.</p><br></br>

        <p>I'm still working on my skill level and looking for work, which will be reflected in the ever changing nature of my portfolio. This isn't a CV though, I just want to let you know who I am. Apologies that the website is currently under construction looking at a major overhaul. Once my holidays are out the way I'll get this updated asap.</p><br></br>

        <p>Just a few days before I started my course in February 2023, my partner and I adopted a dog! Soba was rescued from a shelter in Spain and she's our princess. She's a galgo, she's almost 4 years old and is equal parts really fast and fast asleep. Then, for her sake and definitely not ours, we adopted her a sister! Matcha! She's equally beautiful and fun. Also a galgo but slightly faster. She loves to play with her sister and they get on brilliantly.</p><br></br>

        <p>I recently retired from playing football, accepting my dream of playing for Man Utd was finally over. Who knew they weren't looking for an out of shape 30 something to change their fortunes? I loved playing football but sometimes you just have to accept that your time has come, now I focus more on running. I completed one in September, 2023, Tallinn. Coming in at a time of 4:41 I hope to smash that next time around. Other than running, I like to get out the rollerblades as I'm trying to learn. The intention is to transfer those skills into joining an amateur Ice Hockey team. They would have to be VERY amateur though.</p><br></br>

        <p>Beyond sport, work and my family I love to travel. Whether it's a solo trip, visiting friends or travelling with my partner, getting away from where I'm based for a while is unbeatable. I've currently travelled to 50 different countries and I'm not looking to stop. My favourite trip so far was to Canada and the United states. In 2 weeks, I flew to Toronto to watch the Maple Leafs play and see Niagara falls, then a flight to Chicago to explore the windy city. Next a drive to Cincinnati with a stop off at Casey to see the world's largest rocking chair. I spent my birthday in Cincinnati watching the Bengals beat the Falcons before ending my trip with a few days in New York eating $1 pizzas.
 <br></br>

           On my most recent trip, I went to Lithuania with my partner and our 2 dogs. Driving from the Netherlands we stopped in Germany, Liechtenstein, Austria, Czechia and Poland! Next stop, Kazakhstan, Kyrgyzstan, Uzbekistan and Tajikistan!</p>
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
                  <img src={project.image} className="project-image" alt="{project.name}" />
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
                <div><p className="titles">Skillset.</p></div>
            <div class="container">
              <div class="row">
                <div id="Skills" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <section className="images-skills" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '25px', maxWidth: '800px', width: '100%' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    <img src="https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png" alt="HTML" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="CSS" style={{ width: '10%', height: '10%', objectFit: 'cover' }} />
                    <img src="https://www.djangoproject.com/m/img/logos/django-logo-negative.png" alt="Django" style={{ width: '10%', height: '10%', objectFit: 'cover' }} />
                    <img src="https://1000logos.net/wp-content/uploads/2020/08/PostgreSQL-Logo.png" alt="PostgreSQL" style={{ width: '10%', height: '10%', objectFit: 'cover' }} />
                    <img src="https://bulma.io/assets/Bulma%20Logo.png" alt="Bulma" style={{ width: '10%', height: '10%', objectFit: 'cover' }} />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" alt="Bootstrap" style={{ width: '10%', height: '10%', objectFit: 'cover' }} />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" alt="AWS" style={{ width: '10%', height: '10%', objectFit: 'cover' }} />
                    <img src="https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png" alt="MongoDB" style={{ width: '10%', height: '10%', objectFit: 'cover' }} />
                  </section>
                </div>
                <h1><br></br>Looking to contact me?</h1>
              </div>
              <div class="row">
                <h4 style={{ textAlign: 'center' }}>I'd love to hear from you!!</h4>
              </div>
              <form action="https://formsubmit.co/ckearney1992@gmail.com" method="POST">
                <div className="row input-container">
                  <div className="col-xs-12">
                    <div className="styled-input wide">
                      <input type="text" name="name" required />
                      <label>Name</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="styled-input wide">
                      <input type="text" name="email" required />
                      <label>Email</label>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="styled-input wide">
                      <textarea name="message" required></textarea>
                      <label>Message</label>
                    </div>
                  </div>
                  <input type="hidden" name="_next" value="https://kearmododragon.com" />
                  <input type="hidden" name="_captcha" value="false" />
                </div>
                <div className="row">
                  <div className="col-xs-12 text-center">
                    <div className="col" style={{ textAlign: 'right', marginRight: '-15px' }}>
                      <div className="styled-input wide">
                        <button style={{ backgroundColor: '#1E90FF', borderRadius: '5px', padding: '10px 20px', color: '#fff', border: 'none' }}>Send Message</button>
                      </div>
                    </div>
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
