import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Signin from "./Components/Signin";
import Success from "./Components/Success";
import NewProject from "./Components/NewProject";
import FeaturedProjects from "./Components/FeaturedProjects";
import Users from "./Components/Users";
import UserDetails from "./Components/UserDetails";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />}>
            <Route path="new" element={<NewProject />} />
            <Route path="featured" element={<FeaturedProjects />} />
          </Route>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
