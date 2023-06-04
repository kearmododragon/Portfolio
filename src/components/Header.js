function Header(props) {
  //inline style for the nav tag

  return (
   
      <header style={{ backgroundColor: "blue" }}>
 <div className="header">
        <a href="#Home" style={{ position: "fixed", top: "10px", right: "10px", marginRight: "100px" }}>
          Home
        </a>
        <a href="#About" style={{ position: "fixed", top: "10px", right: "10px", marginRight: "200px" }}>
          About Me
        </a>
        <a href="#Projects" style={{ position: "fixed", top: "10px", right: "10px", marginRight: "300px" }}>
          Projects
        </a>

</div>
      </header>
      );
}

export default Header;
