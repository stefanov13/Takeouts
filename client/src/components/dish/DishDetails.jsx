import { useParams } from "react-router-dom";
import { getOneDish } from "../../api/meals";
import { useEffect, useState } from "react";
import "./DishDetails.scss";
import useAuth from "../../hooks/useAuth";
import DishActions from "./DishActions";

function DishDetails() {
  const { user } = useAuth();
  const { dishId } = useParams();
  const [dish, setDish] = useState({
    createdBy: "",
    dish: {
      title: "",
      ingredients: [],
      image: "",
      category: "",
    },
    _id: "",
  });

  useEffect(() => {
    const getDish = async () => {
      const data = await getOneDish(dishId);
      setDish(data);
    };
    getDish();
  }, [dishId]);

  let ingredients = [];

  if (Array.isArray(dish.dish.ingredients)) {
    ingredients = dish.dish.ingredients;
  } else {
    ingredients = dish.dish.ingredients.split(",");
  }

  return (
    <>
      <div className="dishContainer">
        <div className="imageContainer">
          <img src={dish.dish.image} />
        </div>
        <div className="infoContainer">
          <h2>{dish.dish.title}</h2>
          <p>Category: {dish.dish.category}</p>
          <div>
            <span className="ingredientsText">Ingredients:</span>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {user._id === dish.createdBy && (
        <DishActions dishId={dish._id} dish={dish} setDish={setDish} />
      )}
    </>
  );
}
export default DishDetails;
