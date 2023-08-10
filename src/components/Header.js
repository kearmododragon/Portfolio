import '../App.css';
function Header(props) {
  return (
<div>
    <div class="container">
	<div class="row">
			<h1>contact us</h1>
	</div>
	<div class="row">
  <h4 style={{ textAlign: 'center' }}>We'd love to hear from you!</h4>
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
					<label>Phone Number (optional) </label> 
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
				<button><div class="btn-lrg submit-btn">Send Message</div></button>
			</div>

	</div>
  </form>
</div>





    <header className='header'>
      <div className="header-content">
        <a className="hello" href="#Home">Home</a>
        <a className="hello" href="#About">About Me</a>
        <a className="hello" href="#Projects">Projects</a>

      </div>
    </header>
</div>
  );
}

export default Header;
