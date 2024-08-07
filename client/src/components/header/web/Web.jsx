import "./Web.scss";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
function Web({ user }) {
  return (
    <nav className="navigation">
      <div className="contentLogo">
        <Link to="/">
          <img src="/logo.png" alt="" className="logo" />
        </Link>
        <Link className="logoLink" to="/">
          Takeouts
        </Link>
      </div>
      <div className="contentLinks">
        {user && (
          <Link className="link" to="/create-dish">
            Create dish
          </Link>
        )}
        <Link className="link" to="/meals-list">
          Meals
        </Link>
        <Link className="link" to="/about">
          About Us
        </Link>
        <Link className="link" to="/contact">
          Contacts
        </Link>
      </div>
      <div className="contentLinksIcon">
        {user && (
          <Link className="link" to="/profile">
            <FontAwesomeIcon icon={faUser} />
            Profile
          </Link>
        )}
        {!user && (
          <>
            <Link className="linkSignIn" to="/sign-in">
              Sign In
            </Link>
            <Link className="linkCreateAccount" to="/create-account">
              Create Account
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Web;
