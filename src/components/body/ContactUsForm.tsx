import "./ContactUsForm.css";

const ContactUsForm = () => {
  return (
    <form className="ContactUsForm">
      <p>35,000+ Already Joined</p>
      <h2>Stay up-to-date with what we're doing</h2>
      <input type="email" name="email-address" id="email-address" />
      <button>Contact Us</button>
    </form>
  );
};

export default ContactUsForm;
