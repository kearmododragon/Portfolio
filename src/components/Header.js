import '../App.css';
function Header(props) {
  return (
    <header className='header'>
      <div className="header-content">
        <a className="hello" href="#Home">Home</a>
        <a className="hello" href="#About">About Me</a>
        <a className="hello" href="#Projects">Projects</a>

      </div>
    </header>

  );
}

export default Header;
