import BookmarkSection from "./body/BookmarkSection";
import ContactUsForm from "./body/ContactUsForm";
import DownloadSection from "./body/DownloadSection";
import FAQSection from "./body/FAQSection";
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
      <FAQSection />
      <ContactUsForm />
    </main>
  );
};

export default PageBody;
