import { useNavigate } from "react-router-dom";
import { deleteDish, getOneDish } from "../../api/meals";
import "./DishActions.scss";
import { useEffect, useState } from "react";
import DishEditForm from "./dishEditForm/DishEditForm";
function DishActions({ dishId, dish, setDish }) {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleClick = async () => {
    deleteDish(dishId);
    navigate("/meals-list");
  };

  const handleEdit = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="dishActions">
        <button onClick={handleEdit} className="editBtn">
          {toggle ? "Cancel" : "Edit"}
        </button>
        <button
          disabled={toggle}
          onClick={handleClick}
          className={`deleteBtn ${toggle && "disabled"}`}
        >
          Delete
        </button>
      </div>
      {toggle && (
        <div className="dishActionsEdit">
          <DishEditForm
            dish={dish.dish}
            id={dish._id}
            setToggle={setToggle}
            setDish={setDish}
          />
        </div>
      )}
    </>
  );
}
export default DishActions;
