import { createContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  const initialAuthlValue = localStorage.getItem("accessToken")
    ? JSON.parse(localStorage.getItem("accessToken"))
    : null;

  const initialUserlValue = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;

  const [accessToken, setAccessToken] = useState(() => initialAuthlValue);
  const [user, setUser] = useState(() => initialUserlValue);
  const [error, setError] = useState(null);

  const login = async ({ _email, password }) => {
    try {
      const response = await fetch("http://localhost:3030/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: _email, password }),
      });

      if (response.status === 403) {
        const data = await response.json();
        setError(data.message);
        return;
      }

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      const { accessToken, email, _id, name } = data;

      setAccessToken(accessToken);
      setUser({
        name,
        email,
        id: _id,
      });

      localStorage.setItem("accessToken", JSON.stringify(accessToken));
      localStorage.setItem("profile", JSON.stringify({ name, email, _id }));
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    const response = await fetch("http://localhost:3030/users/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": accessToken,
      },
    });
    if (response.status !== 204) {
      throw new Error("Failed to log out");
    }
    setAccessToken(null);
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("profile");
    navigate("/");
  };

  const register = async ({ _name, _email, password, password2 }) => {
    if (password !== password2) {
      return;
    }
    try {
      const response = await fetch("http://localhost:3030/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: _name, email: _email, password }),
      });
      if (response.status === 409) {
        const data = await response.json();
        setError(data.message);
        return;
      }

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { name, email, _id, accessToken } = await response.json();
      setAccessToken(accessToken);
      setUser({
        name,
        email,
        id: _id,
      });
      localStorage.setItem("accessToken", JSON.stringify(accessToken));
      localStorage.setItem("profile", JSON.stringify({ name, email, _id }));

      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  const contextData = {
    accessToken,
    user,
    login,
    logout,
    register,
    error,
    setError,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
