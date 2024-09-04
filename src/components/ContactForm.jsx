/* eslint-disable react/prop-types */
import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
const ContactForm = ({ services }) => {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const onHCaptchaChange = (token) => {
    if (token) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };
  // const randomString = Math.random().toString(36).slice(8);
  // const [captcha, setCaptcha] = useState(randomString);
  // const [text, setText] = useState("");
  // const [valid, setValid] = useState(false);

  // const refreshing = () => {
  //   setCaptcha(Math.random().toString(36).slice(8));
  // };

  // const matchCaptcha = () => {
  //   return text === captcha;
  // };

  // const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    // if (!matchCaptcha()) {
    //   setValid(false);
    //   setResult("Captcha does not match. Please try again.");
    //   return;
    // }
    // setValid(true);

    const formData = new FormData(event.target);
    // console.log(formData, "formmmm");

    formData.append("access_key", "4198e6e5-1a8e-4763-8e5f-35a75c33caec");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(
        "Form not submitting ! please try again later (or) contact this Number 9790845787"
      );
    }
  };

  return (
    <div className=" p-4 sm:p-8  bg-[rgba(0,0,0,0.5)]  text-black">
      <form onSubmit={onSubmit}>
        <div className="">
          <div className="">
            <input
              type="text"
              name="Customer Name"
              placeholder="Name"
              required
              className="w-full    border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 outline-none mb-4"
            />
          </div>
        </div>
        <div className="contactRow">
          <div className="inputItem">
          <input
              type="email"
              name="E-mail"
              placeholder="E-mail"
              required
              className="w-full    border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 outline-none mb-4"
            />
          </div>
          {}

          <div className="inputItem">
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full    border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 outline-none mb-4"
            />
          </div>
        </div>
        <div className="contactRow customInputArea">
          <div className="inputItem">
            <textarea
              rows={3}
              name="Message"
              required
              placeholder="Message"
              className="w-full    border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 outline-none mb-4 "
            ></textarea>

            {/* <div className="contactCaptchaContainer">
              <span>{captcha} </span>
              <MdRefresh onClick={() => refreshing()} />
            </div>
            <input
              type="text"
              name=""
              placeholder="Enter Captcha"
              value={text}
              onChange={(e) => setText(e.target.value)}
              id=""
              required
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
            />
            {valid && <label className="captcheresult">{result}</label>} */}
          </div>
        </div>
        <div className="hcaptcha-container">
          <HCaptcha
            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            reCaptchaCompat={false}
            onVerify={onHCaptchaChange}
          />
        </div>

        <div className="contactRow customButton">
        
          <button
                className="bg-gradient-to-r from-primary to-primary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 my-6 py-1 rounded-full"
                type="submit" disabled={!captchaVerified}
              >
                Submit Form
              </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
