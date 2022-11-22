import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
export default function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const URL = "https://fakestoreapi.com/products";
  const fetchProducts = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchProducts(URL);
    setLoading(true);
  }, []);
  return (
    <div>
      <h2> Users Info</h2>
      {loading ? (
        <div>
          <h3 style={{ color: "red", textAlign: "center" }}> LOADING...! </h3>
        </div>
      ) : (
        <div className="users-container">
          {data.map((info) => {
            const { id, title, image } = info;
            return (
              <div key={id} className="each-prod">
                <Link to={`/users/${id}`} state={info}>
                  <h4>{title} </h4>
                  <img alt={title} src={image} width={113} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
