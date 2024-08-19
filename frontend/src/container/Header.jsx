import { NavLink } from "react-router-dom";
import logo from "../designs/img/argentBankLogo.png";

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <NavLink to={"/"} className="main-nav-logo">
            <img 
              className="main-nav-logo-image" 
              src={logo}
              alt="Argent Bank Logo"
              />
            <h1 className="sr-only">Argent Bank</h1> 
        </NavLink>
        <NavLink to={"/login"}className="main-nav-item">
          <div>
              <i className="fa fa-user-circle"></i>
              Sign In
          </div>
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;