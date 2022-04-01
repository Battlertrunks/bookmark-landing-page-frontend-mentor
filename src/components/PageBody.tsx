import BookmarkSection from "./body/BookmarkSection";
import DownloadSection from "./body/DownloadSection";
import FeaturesSection from "./body/FeaturesSection";
import SimpleBookmarkSection from "./body/SimpleBookmarkSection";
import "./PageBody.css";

const PageBody = () => {
  return (
    <main className="PageBody">
      <SimpleBookmarkSection />
      <FeaturesSection />
      <BookmarkSection />
      <DownloadSection />
    </main>
  );
};

export default PageBody;
