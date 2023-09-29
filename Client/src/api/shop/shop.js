export const allItems = async () => {
  const url = "https://food-app-server-mocha.vercel.app/allFood";
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const singleItems = async (id) => {
  const url = `https://food-app-server-mocha.vercel.app/allFood/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const reviewFood = async (id, item) => {
  console.log(id, item);
  const url = `https://food-app-server-mocha.vercel.app/reviewFood/${id}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(item),
  });
  const data = await res.json();
  return data;
};
