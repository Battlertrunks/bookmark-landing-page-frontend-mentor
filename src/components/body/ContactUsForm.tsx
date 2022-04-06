import { FormEvent } from "react";
import { useInput } from "../../hooks/use-input";
import errorIcon from "../../bookmark-landing-page-master/images/icon-error.svg";
import "./ContactUsForm.css";

const hasEmail = (value: string) => value.includes("@");

const ContactUsForm = () => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    error: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(hasEmail);

  let formValid = false;

  const inputValidation = emailIsValid;

  if (inputValidation) formValid = true;

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (!formValid) return;

    emailReset();
  };

  const emailInputClasses = emailInputHasError
    ? "ContactUsForm invalid"
    : "ContactUsForm";

  return (
    <form className={emailInputClasses} onSubmit={submitHandler}>
      <p className="opening-text">35,000+ Already Joined</p>
      <h2 className="title-heading">Stay up-to-date with what we're doing</h2>
      <div className="input-btn-container">
        <div className={emailInputHasError ? "input-container" : ""}>
          <input
            type="text"
            name="email-address"
            id="email-address"
            className="input"
            placeholder="Enter your email address"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
          />
          {/* {emailInputHasError && <img src={errorIcon} alt="Input invalid" />} */}
        </div>
        <button>Contact Us</button>
      </div>
    </form>
  );
};

export default ContactUsForm;
