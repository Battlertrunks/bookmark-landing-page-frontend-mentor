import "./DownloadSection.css";
import googleLogo from "../../bookmark-landing-page-master/images/logo-chrome.svg";
import firefoxLogo from "../../bookmark-landing-page-master/images/logo-firefox.svg";
import operaLogo from "../../bookmark-landing-page-master/images/logo-opera.svg";

const DownloadSection = () => {
  return (
    <section className="DownloadSection">
      <h2>Download the extention</h2>
      <p>
        Our powerful search feature will help you find saved sites in no time at
        all. No need to trawl through all of your bookmarks.
      </p>
      <ul>
        <li>
          <img src={googleLogo} alt="Google's logo" />
          <h3>Add to Chrome</h3>
          <p>Minimum version 6.2</p>
          <button>Add & Install Extension</button>
        </li>
        <li>
          <img src={firefoxLogo} alt="Firefox's logo" />
          <h3>Add to Firefox</h3>
          <p>Minimum version 5.5</p>
          <button>Add & Install Extension</button>
        </li>
        <li>
          <img src={operaLogo} alt="Opera's logo" />
          <h3>Add to Opera</h3>
          <p>Minimum version 4.6</p>
          <button>Add & Install Extension</button>
        </li>
      </ul>
    </section>
  );
};

export default DownloadSection;
