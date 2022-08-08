import "./style.css";
import { Link } from "react-router-dom";
const Header = ({ page }) => {
  return (
    <ul className="header">
      <li>
        <Link to="/" className={`${page == "home" && "active"}`}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/post">Post</Link>
      </li>
    </ul>
  );
};

export default Header;
