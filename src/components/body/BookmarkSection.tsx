import "./BookmarkSection.css";
import illustrationFeaturesTab1 from "../../bookmark-landing-page-master/images/illustration-features-tab-1.svg";
import illustrationFeaturesTab2 from "../../bookmark-landing-page-master/images/illustration-features-tab-2.svg";
import illustrationFeaturesTab3 from "../../bookmark-landing-page-master/images/illustration-features-tab-3.svg";
import { useState } from "react";
import FeatureDetails from "../../models/FeaturesDetails";

interface Props {
  onTab: number;
}

const BookmarkSection = ({ onTab }: Props) => {
  const featuresDescriptions: FeatureDetails[] = [
    {
      title: "Bookmark in one click",
      paragraph:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      img: illustrationFeaturesTab1,
    },
    {
      title: "Intelligent search",
      paragraph:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      img: illustrationFeaturesTab2,
    },
    {
      title: "Share your bookmarks",
      paragraph:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      img: illustrationFeaturesTab3,
    },
  ];

  return (
    <section className="BookmarkSection">
      <div className="img-container">
        <img src={featuresDescriptions[onTab].img} alt="Features tab" />
        <div className="blue-background" />
      </div>
      <div className="content-container">
        <h2>{featuresDescriptions[onTab].title}</h2>
        <p>{featuresDescriptions[onTab].paragraph}</p>
      </div>
    </section>
  );
};

export default BookmarkSection;
