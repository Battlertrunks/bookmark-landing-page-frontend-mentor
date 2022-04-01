import logo from "../../../bookmark-landing-page-master/images/logo-bookmark.svg";
import facebookIcon from "../../../bookmark-landing-page-master/images/icon-facebook.svg";
import twitterIcon from "../../../bookmark-landing-page-master/images/icon-twitter.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <h2>
        <img src={logo} alt="Footer company logo." />
      </h2>
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
      </ul>
      <ul>
        <li>
          <img src={facebookIcon} alt="Facebook page link" />
        </li>
        <li>
          <img src={twitterIcon} alt="Twitter page link" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
