import { useEffect, useState } from "react";
import "./MealsList.scss";
import { getAllMeals } from "../../api/meals";
import { Link } from "react-router-dom";

const MealsList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const data = await getAllMeals();
      setMeals(data);
    };
    fetchMeals();
  }, []);

  return (
    <div className="containerDashboard">
      <div className="contentDashboardList">
        {meals.map((meal) => (
          <MealItem key={meal._id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export const MealItem = ({ meal }) => {
  let ingredients = [];

  if (Array.isArray(meal.dish.ingredients)) {
    ingredients = meal.dish.ingredients;
  } else {
    ingredients = meal.dish.ingredients.split(",");
  }

  return (
    <Link to={`/meals-list/${meal._id}`} className="dashboardContent">
      <img className="dashboardImg" src={meal?.dish?.image} alt="" />
      <div className="dashboardInformation">
        <h3 className="dashboardInformationTitle">{meal?.dish?.title}</h3>
        <p className="dashboardInformationDescription">
          {ingredients.join(", ")}
        </p>
      </div>
    </Link>
  );
};

export default MealsList;
