import { useState } from "react";
import "./SignIn.scss";
import useAuth from "../../hooks/useAuth";

function SignIn() {
  const { login, error, setError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const [touched, setTouched] = useState({
    name: false,
    password: false,
  });

  const validatePassword = () => {
    if (!password) {
      return "Password is required!";
    }
    if (password.length < 6) {
      return "Password should have more than 6 characters!";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordError = validatePassword();
    if (passwordError) {
      setErrors(passwordError);
      return;
    }

    await login({ _email: email, password });

    setEmail("");
    setPassword("");
  };

  const handleBlur = (field) => (e) => {
    setTouched({
      ...touched,
      [field]: true,
    });
    setError(null);
  };

  const passwordError = validatePassword();
  const isFormInvalid = !email || passwordError;

  return (
    <div className="signInSection">
      <form className="signInForm" onSubmit={handleSubmit}>
        {error && <p className="mainError">{error}</p>}
        <label htmlFor="email" className="signInFormLabel">
          Email
        </label>
        <input
          type="text"
          name="email"
          className={`signInFormInput ${
            touched.name && !email ? "signInFormInputError" : ""
          }`}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(null);
          }}
          onBlur={handleBlur("email")}
          required
        />

        <label htmlFor="password" className="signInFormLabel">
          Password
        </label>
        <input
          type="password"
          name="password"
          className={`signInFormInput ${
            touched.password && passwordError ? "signInFormInputError" : ""
          }`}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(null);
          }}
          onBlur={handleBlur("password")}
          required
        />

        {touched.password && passwordError && (
          <p className="error">{passwordError}</p>
        )}

        {errors && <p className="mainError">{errors}</p>}

        <button
          type="submit"
          disabled={isFormInvalid}
          style={{ backgroundColor: isFormInvalid ? "lightgray" : "orange" }}
          className="signInFormButton"
        >
          SignIn
        </button>
      </form>
    </div>
  );
}

export default SignIn;
