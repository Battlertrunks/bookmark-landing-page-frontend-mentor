import logo from "../../bookmark-landing-page-master/images/logo-bookmark.svg";
import hamburger from "../../bookmark-landing-page-master/images/icon-hamburger.svg";

import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <h1>
        <img src={logo} alt="Bookmark logo" />
      </h1>
      <button>
        <img src={hamburger} alt="dropdown navigation icon" />
      </button>
      <ul>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
