import '../App.css';
function Header(props) {
  return (
   
      <header className='header'>
 <div className="header-content">
        <a className="hello" href="#Home" style={{ position: "fixed", top: "10px", right: "10px", marginRight: "50px" }}>
          Home
        </a>
        <a className="hello" href="#About" style={{ position: "fixed", top: "10px", right: "10px", marginRight: "100px" }}>
          About Me
        </a>
        <a className="hello" href="#Projects" style={{ position: "fixed", top: "10px", right: "10px", marginRight: "179px" }}>
          Projects
        </a>

</div>
      </header>
      );
}

export default Header;
