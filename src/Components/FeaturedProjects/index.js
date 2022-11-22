import { useEffect, useState } from "react";
import "./index.css";
export default function FeaturedProjects() {
  const [data, setData] = useState([]);
  const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=l";
  const fetchDrinks = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data.drinks);
    setData(data.drinks);
  };
  useEffect(() => {
    fetchDrinks(URL);
  }, []);
  return (
    <div>
      <h2>Featured Projects </h2>
      <div className="drinks-container">
        {data.map((info) => {
          const {
            idDrink,
            strDrink,
            strAlcoholic,
            strInstructions,
            strDrinkThumb
          } = info;
          return (
            <div key={idDrink} className="each-drink">
              <h3> {strDrink}</h3>
              <h4> {strAlcoholic}</h4>
              <img alt={strDrink} src={strDrinkThumb} width={300} />
              <p> {strInstructions} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
