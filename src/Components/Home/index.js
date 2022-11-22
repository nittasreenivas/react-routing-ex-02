import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/success");
  };
  return (
    <div>
      <h2> Home </h2>
      <button onClick={handleClick}>submit </button>
    </div>
  );
}
