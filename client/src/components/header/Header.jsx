import "./Header.scss";
import Web from "./web/Web";
import Mobile from "./mobile/Mobile";
import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Header() {
  const location = useLocation();
  const { user, logout } = useAuth();

  if (location.pathname === "/admin") {
    return null;
  }
  return (
    <header className="header">
      <div className="web">
        <Web user={user} />
      </div>

      <div className="mobile">
        <Mobile user={user} logout={logout} />
      </div>
    </header>
  );
}

export default Header;
