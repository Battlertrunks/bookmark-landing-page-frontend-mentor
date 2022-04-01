import "./SimpleBookmarkSection.css";
import tabletImg from "../../bookmark-landing-page-master/images/illustration-hero.svg";

const SimpleBookmarkSection = () => {
  return (
    <section className="SimpleBookmarkSection">
      <div>
        <img src={tabletImg} alt="image of a tablet showing" />
        <div />
      </div>
      <h2>A Simple Bookmark Manager</h2>
      <p>
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>
      <ul>
        <li>
          <button>Get it on Chrome</button>
        </li>
        <li>
          <button>Get it on Firefox</button>
        </li>
      </ul>
    </section>
  );
};

export default SimpleBookmarkSection;
