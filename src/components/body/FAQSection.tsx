import "./FAQSection.css";

const FAQSection = () => {
  return (
    <section className="FAQSection">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <ul>
        <li>
          <h3>What is Bookmark?</h3>
        </li>
        <li>
          <h3>How can I request a new browser?</h3>
        </li>
        <li>
          <h3>Is there a mobile app?</h3>
        </li>
        <li>
          <h3>What about other Chromium browsers?</h3>
        </li>
      </ul>
      <a href="#">More Info</a>
    </section>
  );
};

export default FAQSection;
