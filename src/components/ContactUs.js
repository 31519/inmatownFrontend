import React, { useState, useEffect } from "react";
import axios from "axios";
import  Link  from "next/link";
import contactStyles from "../styles/ContactUs.module.css";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';



const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const contactUsHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_DEVELOPMENT_URL}/api/users/users-forms/`,
        {
          full_name: fullName,
          email: email,
          message: message,
        },

        config
      );

      setSuccess(data.detail);
      setEmail("");
      setMessage("");
      setFullName("");

      //   console.log("daata", success);
      //   setImage(data.image);
      //   setLoading(false);
    } catch (error) {
      //   setLoading(false);
    }
  };

  const successClose = () => {
    setSuccess("");
  };

  const image = "/contactus.jpg";

  return (
    <>
      <div className={contactStyles.poster}>
        <img className={contactStyles.image} src={image} alt="contact us" />
      </div>
      <div className={contactStyles.container}>
        {success && (
          <div className={contactStyles.success}>
            <p className={contactStyles.successClose} onClick={successClose}>
              X
            </p>
            <p className={contactStyles.successText}>{success}</p>
          </div>
        )}
        {/* Contact us  portion */}
        <div className={contactStyles.whatsappLinkDiv}>
          <a
            className={contactStyles.whatsappLink}
            href="https://wa.me/9366993068"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className={contactStyles.icons}/>
            whatsapp
          </a>
        </div>
        <h2 className={contactStyles.header}>
          Send Us Your Feedback , Complaint , Insights
        </h2>
        <div className="signup-form">
          <form className="form" onSubmit={contactUsHandler}>
            <div className={contactStyles.inputName}>
              <input
                className={contactStyles.textName}
                type="fullName"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                fullWidth
                required
              />
              <div className={contactStyles.required}>*</div>
            </div>

            <div className={contactStyles.inputName}>
              <input
                className={contactStyles.textName}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
              />
              <div className={contactStyles.required}>*</div>
            </div>

            <div className={contactStyles.inputName}>
              <textarea
                className={contactStyles.textArea}
                type="textArea"
                placeholder="Message, Enquiry, Feedback"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
                required
                rows="8"
              />
              <div className={contactStyles.required}>*</div>
            </div>

            <input
              type="submit"
              className={contactStyles.inputSubmit}
              value="Submit"
              //   onClick={contactUsHandler}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
