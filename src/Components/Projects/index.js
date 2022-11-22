import { Link, Outlet } from "react-router-dom";
import "./index.css";
export default function Projects() {
  return (
    <div>
      <h2> Projects </h2>
      <div className="project-container">
        <ul className="project-list">
          <Link to="/projects/new">
            <li>NewProjects </li>
          </Link>
          <Link to="/projects/featured">
            <li> FeaturedProjects</li>
          </Link>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
