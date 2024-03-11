import "../Navbar/Navbar.scss";
import myLogo from "../Navbar/logopng.png";
import loginlogo from './loginpngegg.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="https://www.booking.com/" ><img className="logo" src={myLogo} alt="Blog Logo" /></a>

      {/* <h1>Navbar</h1> */}
      <a href="#">About</a>
      <a href="#">For You</a>
      <a href="#">Services</a>
      <a href="#">Blog</a>
      <a href="#">Vlog</a>
      <a href="#">Contact</a>
      <div className="login">
      <img className="loginlogo" src={loginlogo} alt="Login logo"/>
        <a href="">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
