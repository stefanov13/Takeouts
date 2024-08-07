import { useState } from "react";
import "./Mobile.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faX } from "@fortawesome/free-solid-svg-icons";
function Mobile({ user, logout }) {
  const [isShow, setIsShow] = useState(false);

  const toggleIsShow = () => {
    setIsShow(() => !isShow);
  };
  return (
    <nav className="navigationMobile">
      <div className="contentLogoMobile">
        <Link className="logoMobile linkMobile link" to="/">
          <img src="/logo.png" alt="" className="logoMobile" />
        </Link>
      </div>
      <div className="contentButtonMobile">
        <button onClick={toggleIsShow} className="dropdownButtonMobile">
          <FontAwesomeIcon icon={faBars} className="faBars" />
        </button>
        {isShow && (
          <div className="contentDropdownMobile">
            <div className="contentOnCloseButtonMobile">
              <button onClick={toggleIsShow} className="onCloseButtonMobile">
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>
            <Link className="linkMobile" to="/">
              <FontAwesomeIcon icon={faHouse} />
            </Link>
            {user ? (
              <>
                <Link className="linkMobile" to="/create-dish">
                  Create Dish
                </Link>
                <Link className="linkMobile" to="/meals-list">
                  Meals
                </Link>
                <Link className="linkMobile" to="/about">
                  About Us
                </Link>
                <Link className="linkMobile" to="/profile">
                  Profile
                </Link>
                <Link className="linkMobile" to="/contact">
                  Contacts
                </Link>
                <button className="linkMobile logoutButton" onClick={logout}>
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link className="linkMobile" to="/about">
                  About Us
                </Link>
                <Link className="linkMobile" to="/contact">
                  Contacts
                </Link>
                <Link className="linkMobile" to="/sign-in">
                  Log In
                </Link>
                <Link className="linkMobile" to="/create-account">
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Mobile;
