import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hfv6ye5",
        "template_6e23b2o",
        form.current,
        "9UjyIAaiuguD-lz2L"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Keep in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className="contact_icon email" />
            <h4>Email</h4>
            <h5>
              wisdomugwu2015
              <br />
              @gmail.com
            </h5>
            <a href="mailto:wisdomugwu2015@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <FaFacebookMessenger className="contact_icon messenger" />
            <h4>Messenger</h4>
            <h5>wisdom ugwu</h5>
            <a href="https://m.me/100008848326632">Send a message</a>
          </article>
          <article className="contact_option">
            <IoLogoWhatsapp className="contact_icon whatsapp" />
            <h4>Whatsapp</h4>
            <h5>07057049979</h5>
            <a href="https://api.whatsapp.com/send?phone=2347057049979">
              Send a message
            </a>
          </article>
        </div>
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="7"
            ></textarea>
            <button type="submit" className="btn btn_primary">
              send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
