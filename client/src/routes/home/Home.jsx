import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="cover">
      <div className="cover-title">
        <p className="cover-title-text">All meals,</p>
        <p className="cover-title-text">you can find </p>
        <p className="cover-title-text">
          only <span>here</span>!
        </p>
        <Link className="about-meals-link" to="/meals-list">
          Meals
        </Link>
      </div>
    </div>
  );
}

export default Home;
