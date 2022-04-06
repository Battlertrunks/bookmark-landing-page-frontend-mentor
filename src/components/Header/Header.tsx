import logo from "../../bookmark-landing-page-master/images/logo-bookmark.svg";
import hamburger from "../../bookmark-landing-page-master/images/icon-hamburger.svg";

import "./Header.css";
import DropDownModal from "../body/DropDownModal";

const Header = () => {
  return (
    <header className="Header">
      <div className="header-container">
        <h1>
          <img src={logo} alt="Bookmark logo" />
        </h1>
        <button>
          <img src={hamburger} alt="dropdown navigation icon" />
        </button>
        <ul className="nav-btns">
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
            <a href="#" className="login">
              Login
            </a>
          </li>
        </ul>
      </div>
      <DropDownModal />
    </header>
  );
};

export default Header;
