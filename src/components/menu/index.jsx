import "./menu.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Menu = () => {
  return (
    <div className="menu">
      <a className="social" href="https://github.com/igorrzinho/">
        <BsGithub color="#fff" size={24} />
      </a>
      <a className="social" href="https://www.linkedin.com/in/igor-de-jesus-silva-066552215/">
        <BsLinkedin color="#fff" size={24} />
      </a>
      <a className="menu-item" href="/link">
        meus links
      </a>
    </div>
  );
};

export default Menu;
