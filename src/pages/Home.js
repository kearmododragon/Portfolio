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
  <p>
    Hello. I'm Ciaran, a 33-year-old who studied software engineering in 2023. It's something I've long wanted to do, and I'm proud of how much I got done. I completed the course while working full time, which had its own challenges, but thanks to my support network I made it through.
  </p>
  <br />

  <p>
    At the moment, I'm restudying my bootcamp to make sure my skills are where they should be. I'm self-teaching using online tools and currently working through projects from the first unit again. Initially we had to build one project (I made a blackjack game), but I'm now aiming to complete them all, both to boost my portfolio and to cement my skills and confidence.
  </p>
  <br />

  <p>
    I'm still working on my skill level and looking for work, which will be reflected in the ever-changing nature of my portfolio. This isn't a CV though, I just want to let you know who I am. Apologies that the website is currently under construction and undergoing a major overhaul. As of April 2026, I have moved from the Netherlands to Barcelona with my partner, Kamile, so I'm now looking for work over here.
  </p>
  <br />

  <p>
    When it comes to building things, I really enjoy starting from scratch, but during my studies I also loved the challenge of jumping into other people's work. For now I'm focused on building games and interesting projects, but moving forward my goal is to work for an established company and contribute to existing codebases.
  </p>
  <br />

  <p>
    While I'm currently working solo 100% of the time, I really enjoyed collaborating during the bootcamp. Many of the projects were done in pairs or teams, and that was honestly my favourite part, seeing how other people think, and finding ways to combine different styles and ideas. I got to take on different roles too, from design to debugging to writing code, which I really enjoyed.
  </p>
  <br />

  <p>
    Just a few days before I started my course in February 2023, my partner and I adopted a dog. Soba was rescued from a shelter in Spain and she's our princess. She's a galgo, 4 years old, and equal parts incredibly fast and fast asleep. Then, for her sake (and definitely not ours) we adopted her a sister, Matcha. She's equally beautiful and fun, also a galgo, 2 years old but slightly smaller. They love each other and get on brilliantly.
  </p>
  <br />

  <p>
    I recently retired from playing football, finally accepting my dream of playing for Man Utd was over. Who knew they weren't looking for an out-of-shape 30-something to change their fortunes? I loved playing football, but sometimes you just have to accept when your time has passed. Now I focus more on running. I completed a marathon in September 2023 in Tallinn, finishing in 4:41, and I hope to beat that next time. I also spend time on rollerblades while I'm learning, with the long-term goal of joining an amateur ice hockey team. They would have to be VERY amateur though.
  </p>
  <br />

  <p>
    Beyond sport, work, and family, I love to travel. Whether it's solo trips, visiting friends, or travelling with my partner, getting away from where I'm based is unbeatable. I've travelled to over 50 countries and I'm not planning on stopping. My favourite trip so far was to Canada and the United States. In two weeks I flew to Toronto to watch the Maple Leafs and see Niagara Falls, then on to Chicago, followed by a drive to Cincinnati with a stop in Casey to see the world's largest rocking chair. I spent my birthday there watching the Bengals beat the Falcons, before ending the trip with a few days in New York eating $1 pizza.
  </p>
  <br />

  <p>
    On my most recent trip I went to Central Asia: Kazakhstan, Uzbekistan, Kyrgyzstan, and Tajikistan. As a vegetarian, the food was tricky at times, but the trip was incredible. The landscapes there are unreal, especially in Tajikistan, where about 95% of the country is mountains. The highlight for me wasn’t even climbing them, but an eight-hour drive around Issyk-Kul where we saw a demonstration from golden eagle hunters. They train their eagles from a young age and keep them for around 20 years before releasing them into the wild. I’ve wanted to see something like that since I was a child, so it was unforgettable. At one point during the demonstration, the eagle flew straight into my knee. Thankfully we were all fine.
  </p>
  <br />

  <p>
    Outside of that, I’ve recently been watching <i>Beef</i> on Netflix, though I’m more of a film person than a TV person. I also went to see Wu-Tang Clan live in Amsterdam with friends recently, which was incredible. Since COVID I’ve had a bit of a mindset shift: if there’s a chance to go to something live, I go. You never really know when you’ll get another shot.
  </p>
  <br />

  <p>
    I don’t read as much as I should, but the book I’m currently reading is <i>Frankenstein</i>. My favourite book is probably <i>He Used Thought as a Wife</i> by Tim Key, which I was lucky enough to get signed.
  </p>
  <br />

  <p>
    At the moment I’m mostly enjoying building my skills, settling into Barcelona, and seeing where things go next. First though, I need to build all my IKEA furniture and get properly set up.
  </p>
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
                    <img src="https://icon.icepanel.io/Technology/svg/React.svg" alt="React" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    <img src="https://icon.icepanel.io/Technology/svg/Python.svg" alt="Python" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    <img src="https://icon.icepanel.io/Technology/svg/HTML5.svg" alt="HTML" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    <img src="https://icon.icepanel.io/Technology/svg/CSS3.svg" alt="CSS" style={{ width: '10%', height: '10%', objectFit: 'cover' }} />
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
