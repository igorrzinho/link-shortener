import "./menu.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <a className="social" href="">
        <BsGithub color="#fff" size={24} />
      </a>
      <a className="social" href="">
        <BsLinkedin color="#fff" size={24} />
      </a>
      <Link className="menu-item" to="/links">
        meus links
      </Link>
    </div>
  );
};

export default Menu;
