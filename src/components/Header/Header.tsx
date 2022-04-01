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
    </header>
  );
};

export default Header;
