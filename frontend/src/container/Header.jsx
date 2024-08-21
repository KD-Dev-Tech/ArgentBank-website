import { useDispatch, useSelector } from "react-redux";
import { clearAuth } from "../app/authSlice";
import { NavLink } from "react-router-dom";
import logo from "../designs/img/argentBankLogo.webp";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

const handleSignOut = () => {
    dispatch(clearAuth());
    sessionStorage.removeItem('token');
    localStorage.removeItem('token');
  };

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
        {isAuthenticated ? (
          <NavLink to={"/"} className="main-nav-item" onClick={handleSignOut}>
          <div>
            <i className="fa fa-user-circle"></i>
             Sign Out
          </div>
          </NavLink>
        ) : (
          <NavLink to={"/login"} className="main-nav-item">
            <div>
              <i className="fa fa-user-circle"></i>
              Sign In
            </div>
          </NavLink>
        )}
      </nav>
    </header>
  );
}
export default Header;