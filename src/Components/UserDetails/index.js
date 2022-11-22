import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const [data, setData] = useState({});
  const params = useParams();
  console.log("params", params);
  const URL = "https://fakestoreapi.com/products";
  const fetchData = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    const correctData = `${URL}/${params.id}`;
    fetchData(correctData);
  }, [params.id]);
  return (
    <div>
      <h2>User Details </h2>
      <h3>{data?.title} </h3>
      <img alt={data?.title} src={data?.image} width={120} />
      <p> {data?.description}</p>
      <button>{data?.price} </button>
    </div>
  );
}
