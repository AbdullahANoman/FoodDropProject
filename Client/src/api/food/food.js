export const addFood = async (food) => {
  const res = await fetch(`https://food-app-server-mocha.vercel.app/addFoods`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(food),
  });
  const data = await res.json();
  return data;
};

export const getMyFoods = async (email) => {
  const url = `https://food-app-server-mocha.vercel.app/findFoodOwner/${email}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const deleteMySingleFood = async (id) => {
  const url = `https://food-app-server-mocha.vercel.app/deleteMySingleFood/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
};

export const updateSingleFood = async (id, updateBody) => {
  const url = `https://food-app-server-mocha.vercel.app/updateSingleFood/${id}`;

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(updateBody),
  });
  const data = await res.json();
  return data;
};

// admin update the seller food request

export const updateFoodRequestApprove = async (id) => {
  const url = `https://food-app-server-mocha.vercel.app/updateFoodRequestApprove/${id}`;

  const res = await fetch(url, {
    method: "PUT",
  });
  const data = await res.json();
  return data;
};

export const updateFoodRequestDeny = async (id) => {
  const url = `https://food-app-server-mocha.vercel.app/updateFoodRequestDeny/${id}`;

  const res = await fetch(url, {
    method: "PUT",
  });
  const data = await res.json();
  return data;
};

