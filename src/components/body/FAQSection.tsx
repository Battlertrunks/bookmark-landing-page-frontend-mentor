import { useState } from "react";
import dropArrow from "../../bookmark-landing-page-master/images/icon-arrow.svg";

import "./FAQSection.css";

const FAQSection = () => {
  const [bookmarkDropdown, setBookmarkDropdown] = useState<boolean>(false);
  const [browserDropdown, setBrowserDropdown] = useState<boolean>(false);
  const [appDropdown, setAppDropdown] = useState<boolean>(false);
  const [chromeDropdown, setChromeDropdown] = useState<boolean>(false);

  // const dropdown = (setDropdown:): void => {
  //   setBookmarkDropdown(false);
  //   setBrowserDropdown(false);
  //   setAppDropdown(false);
  //   setChromeDropdown(false);
  // }

  return (
    <section className="FAQSection">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <ul>
        <li>
          <div onClick={() => setBookmarkDropdown((prev) => !prev)}>
            <h3>What is Bookmark?</h3>
            <button>
              <img
                src={dropArrow}
                alt="dropdown button"
                className={bookmarkDropdown ? "rotate" : ""}
              />
            </button>
          </div>
          {bookmarkDropdown && (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </p>
          )}
        </li>
        <li>
          <div onClick={() => setBrowserDropdown((prev) => !prev)}>
            <h3>How can I request a new browser?</h3>
            <button>
              <img
                src={dropArrow}
                alt="dropdown button"
                className={browserDropdown ? "rotate" : ""}
              />
            </button>
          </div>
          {browserDropdown && (
            <p>
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </p>
          )}
        </li>
        <li>
          <div onClick={() => setAppDropdown((prev) => !prev)}>
            <h3>Is there a mobile app?</h3>
            <button>
              <img
                src={dropArrow}
                alt="dropdown button"
                className={appDropdown ? "rotate" : ""}
              />
            </button>
          </div>
          {appDropdown && (
            <p>
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus
              vestibulum dolor, ut condimentum urna vulputate eget. Cras in
              ligula quis est pharetra mattis sit amet pharetra purus. Sed
              sollicitudin ex et ultricies bibendum.
            </p>
          )}
        </li>
        <li>
          <div onClick={() => setChromeDropdown((prev) => !prev)}>
            <h3>What about other Chromium browsers?</h3>
            <button>
              <img
                src={dropArrow}
                alt="dropdown button"
                className={chromeDropdown ? "rotate" : ""}
              />
            </button>
          </div>
          {chromeDropdown && (
            <p>
              Integer condimentum ipsum id imperdiet finibus. Vivamus in
              placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
              pellentesque non ut velit.
            </p>
          )}
        </li>
      </ul>
      <a href="#">More Info</a>
    </section>
  );
};

export default FAQSection;
