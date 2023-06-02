import { useState, useEffect } from "react";

function About(props) {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {

		// make api call and get response
    const response = await fetch("./about.json");

		// turn response into javascript object
    const data = await response.json();

		// set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {getAboutData()}, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
      <p>{about.bio}</p>
      <p>Hi i'm Ciaran and welcome to my portfolio</p>
      <p>About me. This is where i'm going to put the sentance about me.</p>
      <p>Projects. This is where i'm going to put cards about my projects.</p>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
