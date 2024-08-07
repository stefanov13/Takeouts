import { useState } from "react";
import "../../../routes/createDish/CreateDish.scss";
import { editDish } from "../../../api/meals";
import useAuth from "../../../hooks/useAuth";

function DishEditForm({ dish, id, setToggle, setDish }) {
  const { user } = useAuth();
  const [form, setForm] = useState({
    image: dish.image,
    title: dish.title,
    ingredients: dish.ingredients,
    category: dish.category,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.image || !/^https:\/\/.{27,}$/.test(form.image)) {
      newErrors.image =
        'Image URL should start with "https://" and be at least 30 characters long';
    }

    if (!form.title || form.title.replace(/\s/g, "").length < 3) {
      newErrors.title = "Title should contain at least 3 non-space characters";
    }

    if (!form.ingredients || /!{10,}/.test(form.ingredients)) {
      newErrors.ingredients =
        "Ingredients should contain at least 10 non-space characters";
    }

    if (!form.category) {
      newErrors.category = "Please select a category";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const data = await editDish(form, id, user._id);
      setDish((prev) => ({ ...prev, dish: data.dish }));
      setForm({
        image: "",
        title: "",
        ingredients: "",
        category: "",
      });
      setToggle(false);
    }
  };

  return (
    <div className="containerCreateDish">
      <form className="createDishForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image" className="createDishLabel">
            Image
          </label>
          <input
            type="url"
            name="image"
            className="createDishInput"
            value={form.image}
            onChange={handleChange}
            required
            minLength="30"
          />
          {errors.image && <p className="errorMessage">{errors.image}</p>}
        </div>

        <div>
          <label htmlFor="title" className="createDishLabel">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="createDishInput"
            value={form.title}
            onChange={handleChange}
            required
            minLength="3"
          />
          {errors.title && <p className="errorMessage">{errors.title}</p>}
        </div>

        <div className="contentTextarea">
          <label htmlFor="ingredients" className="createDishLabel">
            Ingredients
          </label>
          <textarea
            name="ingredients"
            rows="4"
            cols="50"
            className="createDishTextarea"
            value={form.ingredients}
            onChange={handleChange}
            required
            minLength="10"
          ></textarea>
          {errors.ingredients && (
            <p className="errorMessage">{errors.ingredients}</p>
          )}
        </div>

        <div>
          <label htmlFor="category" className="createDishLabel">
            Category
          </label>
          <select
            name="category"
            className="createDishInput"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten-Free</option>
            <option value="dairy-free">Dairy-Free</option>
            <option value="low-carb">Low Carb</option>
            <option value="low-calorie">Low Calorie</option>
            <option value="high-protein">High Protein</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="keto">Keto</option>
            <option value="paleo">Paleo</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="whole30">Whole30</option>
          </select>
          {errors.category && <p className="errorMessage">{errors.category}</p>}
        </div>

        <button type="submit" className="createDishButton">
          Edit
        </button>
      </form>
    </div>
  );
}

export default DishEditForm;
