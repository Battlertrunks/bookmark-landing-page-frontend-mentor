import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <section className="FeaturesSection">
      <h2>Features</h2>
      <p className="description">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <ul>
        <li>
          <button>Simple Bookmarking</button>
        </li>
        <li>
          <button>Speedy Searching</button>
        </li>
        <li>
          <button>Easy Sharing</button>
        </li>
      </ul>
    </section>
  );
};

export default FeaturesSection;
