import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
    <img className="logo" src="https://i.imgur.com/ClHe2tc.png" alt="logo"></img>
      <h1>My Portfolio Page</h1>
      <nav style={navStyle}>
        <Link to="/">
          <div className="link">HOME</div>
        </Link>
        <Link to="/about">
          <div className="link">Personal life</div>
        </Link>
        <Link to="/projects">
          <div className="link">PROJECTS</div>
        </Link>
        <Link to="/working-career">
          <div className="link">working career</div>
        </Link>
        <Link to="/">
          <div className="link">contact(nl)</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
