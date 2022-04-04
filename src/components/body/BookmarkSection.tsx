import "./BookmarkSection.css";
import featuresTab from "../../bookmark-landing-page-master/images/illustration-features-tab-1.svg";

const BookmarkSection = () => {
  return (
    <section className="BookmarkSection">
      <div className="img-container">
        <img src={featuresTab} alt="Features tab" />
        <div className="blue-background" />
      </div>
      <h2>Bookmark in one click</h2>
      <p>
        Organize your bookmarks however you like. Our simple drag-and-drop
        interface gives you complete control over how you manage your favourite
        sites.
      </p>
    </section>
  );
};

export default BookmarkSection;
