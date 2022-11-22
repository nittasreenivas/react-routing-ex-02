import "./index.css";
export default function Data(props) {
  console.log("props", props);
  return (
    <div className="each-phone">
      <h3>{props.title} </h3>
      <img alt={props.title} src={props.image} width={200} />
      <p> {props.description} </p>
      <button> {props.price}</button>
    </div>
  );
}
