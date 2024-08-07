export const createDish = async (formData, accessToken, userId) => {
  const response = await fetch("http://localhost:3030/jsonstore/dishes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": accessToken,
    },
    body: JSON.stringify({ dish: { ...formData }, createdBy: userId }),
  });

  if (!response.ok) {
    throw new Error("Failed to create dish");
  }

  return await response.json();
};

export const getAllMeals = async () => {
  const response = await fetch("http://localhost:3030/jsonstore/dishes");
  if (!response.ok) {
    throw new Error("Failed to fetch dishes");
  }
  const data = await response.json();

  return Object.values(data);
};

export const getOneDish = async (id) => {
  const response = await fetch(`http://localhost:3030/jsonstore/dishes/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch dish");
  }
  const data = await response.json();
  return data;
};

export const deleteDish = async (id) => {
  const response = await fetch(`http://localhost:3030/jsonstore/dishes/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete dish");
  }
};

export const editDish = async (formData, id, userId) => {
  const response = await fetch(`http://localhost:3030/jsonstore/dishes/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dish: formData, createdBy: userId }),
  });
  if (!response.ok) {
    throw new Error("Failed to edit dish");
  }

  return await response.json();
};
