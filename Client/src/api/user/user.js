export const saveUser = async (email, userData) => {
  const url = `https://food-app-server-mocha.vercel.app/user/${email}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await res.json();
  return data;
};

export const checkUserRole = async (email) => {
  const url = `https://food-app-server-mocha.vercel.app/users/${email}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const allUsers = async () => {
  const url = "https://food-app-server-mocha.vercel.app/users";
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const deleteUser = async (id) => {
  console.log(id);
  const url = `https://food-app-server-mocha.vercel.app/userDelete/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
};

// client request for seller 

export const requestSeller = async (email) => {
  const url = `https://food-app-server-mocha.vercel.app/requestSeller/${email}`;

  const res = await fetch(url, {
    method: "PUT",
  });
  const data = await res.json();
  return data;
};

//client request for rider 

export const requestRider = async (email) => {
  const url = `https://food-app-server-mocha.vercel.app/requestRider/${email}`;

  const res = await fetch(url, {
    method: "PUT",
  });
  const data = await res.json();
  return data;
};



// admin make seller 
export const updateSeller = async (email) => {
  const url = `https://food-app-server-mocha.vercel.app/updateSeller/${email}`;
  const res = await fetch(url, {
    method: "PUT",
  });
  const data = await res.json();
  return data;
};
