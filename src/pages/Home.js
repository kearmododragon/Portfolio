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
<p>Hi, I’m Ciaran, a junior software developer focused on building interactive and user-friendly web applications.</p>

<p>Welcome to my portfolio, where I showcase the projects I’ve been developing as I transition into a career in software engineering.
</p>
        </div>
      </section>


      <div id="About">
        <p className="titles">About me.</p> </div>
<section className="bio">
  <p>I formally began studying software engineering in 2023, and I’m proud of what I’ve achieved while balancing a full-time job. That experience taught me consistency, problem-solving, and how to keep moving forward even when challenges arise.</p><br></br>

  <p>I'm continuing to develop my skills through hands-on projects, many of which you’ll see throughout this portfolio. As I grow, this site will evolve with me, reflecting both my progress and the standards I hold myself to. I’m currently looking for opportunities to contribute as a developer, continue learning, and be part of a team building meaningful products.</p><br></br>

  <p>Outside of coding, I love challenge and exploration. A few days before I started my course, my partner and I adopted a dog, Soba, from a shelter in Spain — she's our princess. Soon after, we adopted her sister, Matcha. Both are galgos, full of energy, and have taught me a lot about patience.</p><br></br>

  <p>I recently retired from playing football, but I continue to stay active with running and other activities. I completed a marathon in Tallinn in September 2023, coming in at 4:41, and I’m looking forward to improving that time. I also enjoy rollerblading and plan to transfer those skills into joining an amateur ice hockey team if the possibility ever arises. I do feel however moving to Barcelona in 2026 is going to but an end to that dream.</p><br></br>

  <p>Travel is a big part of my life. I’ve visited over 50 countries and enjoy both solo trips and adventures with my partner. Some highlights include exploring North America — from watching the Maple Leafs play in Toronto to driving across the US Midwest and finishing in New York and my nexttrip will be across Europe into Central Asia. These experiences have shaped the way I approach life and learning: with curiosity, planning, and flexibility.</p>
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
