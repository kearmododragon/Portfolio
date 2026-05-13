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
    <>
      <div id="Home">
        <section className="big-box">
          <div className="text-box">
            <p>
              Hi, I’m Ciaran, a junior software developer focused on building
              interactive and user-friendly web applications.
            </p>

            <p>
              Welcome to my portfolio, where I showcase the projects I’ve been
              developing as I transition into a career in software engineering.
            </p>
          </div>
        </section>

        <div id="About">
          <p className="titles">About me.</p>
        </div>

        <section className="bio">
          <p>
            Hello. I'm Ciaran, a 33-year-old who studied software engineering
            in 2023. It's something I've long wanted to do, and I'm proud of
            how much I got done. I completed the course while working full
            time, which had its own challenges, but thanks to my support
            network I made it through.
          </p>

          <br />

          <p>
            At the moment, I'm restudying my bootcamp to make sure my skills
            are where they should be. I'm self-teaching using online tools and
            currently working through projects from the first unit again.
            Initially we had to build one project (I made a blackjack game),
            but I'm now aiming to complete them all, both to boost my portfolio
            and to cement my skills and confidence.
          </p>

          <br />

          <p>
            I'm still working on my skill level and looking for work, which
            will be reflected in the ever-changing nature of my portfolio. This
            isn't a CV though, I just want to let you know who I am. Apologies
            that the website is currently under construction and undergoing a
            major overhaul. As of April 2026, I have moved from the Netherlands
            to Barcelona with my partner, Kamile, so I'm now looking for work
            over here.
          </p>

          <br />

          <p>
            When it comes to building things, I really enjoy starting from
            scratch, but during my studies I also loved the challenge of
            jumping into other people's work. For now I'm focused on building
            games and interesting projects, but moving forward my goal is to
            work for an established company and contribute to existing
            codebases.
          </p>

          <br />

          <p>
            While I'm currently working solo 100% of the time, I really enjoyed
            collaborating during the bootcamp. Many of the projects were done
            in pairs or teams, and that was honestly my favourite part, seeing
            how other people think, and finding ways to combine different
            styles and ideas.
          </p>
        </section>

        <div id="Projects">
          <p className="titles">Projects.</p>
        </div>

        <div className="container">
          <div className="columns is-multiline equal-height-cards">
            {projects !== null &&
              projects.map((project) => (
                <div key={project.id} className="column is-one-third">
                  <div className="card">
                    <div className="card-content">
                      <h1 className="title has-text-black">
                        {project.name}
                      </h1>

                      <img
                        src={project.image}
                        className="project-image"
                        alt={project.name}
                      />

                      <div className="buttons">
                        {project.git && (
                          <a
                            href={project.git}
                            className="button is-primary"
                          >
                            Github
                          </a>
                        )}

                        {project.live && (
                          <a
                            href={project.live}
                            className="button is-primary"
                          >
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

        {/* SKILLS SECTION */}

        <section>
          <div>
            <p className="titles">Skillset.</p>
          </div>

          <div
            id="Skills"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <section
              className="images-skills"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "25px",
                maxWidth: "800px",
              }}
            >
              <img
                src="https://icon.icepanel.io/Technology/svg/React.svg"
                alt="React"
                style={{ width: "100px" }}
              />

              <img
                src="https://icon.icepanel.io/Technology/svg/Python.svg"
                alt="Python"
                style={{ width: "100px" }}
              />

              <img
                src="https://icon.icepanel.io/Technology/svg/HTML5.svg"
                alt="HTML"
                style={{ width: "100px" }}
              />

              <img
                src="https://icon.icepanel.io/Technology/svg/CSS3.svg"
                alt="CSS"
                style={{ width: "100px" }}
              />

              <img
                src="https://icon.icepanel.io/Technology/png-shadow-512/Django.png"
                alt="Django"
                style={{ width: "100px" }}
              />

              <img
                src="https://icon.icepanel.io/Technology/svg/PostgresSQL.svg"
                alt="PostgreSQL"
                style={{ width: "100px" }}
              />

              <img
                src="https://icon.icepanel.io/Technology/svg/Bulma.svg"
                alt="Bulma"
                style={{ width: "100px" }}
              />

              <img
                src="https://icon.icepanel.io/Technology/svg/Bootstrap.svg"
                alt="Bootstrap"
                style={{ width: "100px" }}
              />

              <img
                src="https://icon.icepanel.io/Technology/png-shadow-512/AWS.png"
                alt="AWS"
                style={{ width: "100px" }}
              />

              <img
                src="https://icon.icepanel.io/Technology/svg/MongoDB.svg"
                alt="MongoDB"
                style={{ width: "100px" }}
              />
            </section>
          </div>
        </section>

        {/* CONTACT SECTION */}

        <h1>
          <br />
          Looking to contact me?
        </h1>

        <div className="row">
          <h4 style={{ textAlign: "center" }}>
            I'd love to hear from you!!
          </h4>
        </div>

        <form
          action="https://formsubmit.co/ckearney1992@gmail.com"
          method="POST"
        >
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

            <input
              type="hidden"
              name="_next"
              value="https://kearmododragon.com"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />
          </div>

          <div className="row">
            <div className="col-xs-12 text-center">
              <div
                className="col"
                style={{
                  textAlign: "right",
                  marginRight: "-15px",
                }}
              >
                <div className="styled-input wide">
                  <button
                    style={{
                      backgroundColor: "#1E90FF",
                      borderRadius: "5px",
                      padding: "10px 20px",
                      color: "#fff",
                      border: "none",
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;