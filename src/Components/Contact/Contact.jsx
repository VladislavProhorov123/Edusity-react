import React from "react";
import "./Contact.css";
import msg_icon from "/src/assets/msg-icon.png";
import "./Contact.css";
import mail_icon from "/src/assets/mail-icon.png";
import "./Contact.css";
import phone_icon from "/src/assets/phone-icon.png";
import "./Contact.css";
import location_icon from "/src/assets/location-icon.png";
import white_arrow from '/src/assets/white-arrow.png'

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          We’d love to hear from you. Whether you have a question about our
          services, want to discuss a project, or simply wish to say hello —
          we’re always open to new ideas and collaborations. Your message means
          a lot to us, and we make it a priority to respond quickly and
          thoughtfully.
        </p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact@GreatStack.com</li>
          <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
          <li><img src={location_icon} alt="" />
            77 Massachusetts Ave, Cambridge <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter your name" required />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required />
            <label>White your message here</label>
            <textarea rows={5} name="message" placeholder="Enter your message" required></textarea>
            <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
        </form>
      </div>
    </div>
  );
}
