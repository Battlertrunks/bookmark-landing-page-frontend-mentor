import "./ContactUsForm.css";

const ContactUsForm = () => {
  return (
    <form className="ContactUsForm">
      <p className="opening-text">35,000+ Already Joined</p>
      <h2 className="title-heading">Stay up-to-date with what we're doing</h2>
      <div>
        <input
          type="email"
          name="email-address"
          id="email-address"
          placeholder="Enter your email address"
        />
        <button>Contact Us</button>
      </div>
    </form>
  );
};

export default ContactUsForm;
