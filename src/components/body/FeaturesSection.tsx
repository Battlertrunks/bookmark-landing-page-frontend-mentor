import { useState } from "react";
import BookmarkSection from "./BookmarkSection";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const [tabSelect, setTabSelect] = useState<number>(0);

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
          <button onClick={() => setTabSelect(0)}>Simple Bookmarking</button>
        </li>
        <li>
          <button onClick={() => setTabSelect(1)}>Speedy Searching</button>
        </li>
        <li>
          <button onClick={() => setTabSelect(2)}>Easy Sharing</button>
        </li>
      </ul>
      <BookmarkSection onTab={tabSelect} />
    </section>
  );
};

export default FeaturesSection;
