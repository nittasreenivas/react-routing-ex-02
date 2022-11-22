import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h2>Successfully submitted </h2>
      <button onClick={backToHome}>Home </button>
    </div>
  );
}
