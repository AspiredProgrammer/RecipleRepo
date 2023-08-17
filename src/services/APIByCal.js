const APP_ID = "015472df";
const APP_KEY = "f5c90ece39c8ee2ffb082c15b189b178";

export const APIByCal = async (calories) => {
  const response = await fetch(
    `https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&calories=${calories}`
  );
  const data = await response.json();
  return data.hits;
};

export default APIByCal;