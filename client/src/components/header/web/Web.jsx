import "./Web.scss";
import { Link } from "react-router-dom";
function Web() {

    return (
        <nav className="navigation">
            <div className="contentLogo">
                <Link to="/"><img src="/logo.png" alt="" className="logo" /></Link>
                <Link className="logoLink" to="/">
                    Takeouts
                </Link>
            </div>
            <div className="contentLinks">
                <Link className="link" to="/create-dish">
                    Create dish
                </Link>
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
                <Link className="link" to="/profile">
                    <i className="fa-solid fa-user"></i>Profile
                </Link>
                {/* <Link className="linkSignIn" to="/sign-in">
          Sign In
        </Link>
        <Link className="linkCreateAccount" to="/create-account">
          Create Account
        </Link> */}
            </div>
        </nav>
    );
}

export default Web;
