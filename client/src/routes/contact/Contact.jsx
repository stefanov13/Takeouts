import { Email } from "../../components/email/Email";
import "./Contact.scss";

function Contact() {
  return (
    <div className="containerContacts">
      <div className="contentContacts">
        <div className="contentContactsInfo">
          <h1 className="contactInfoTitle">Contact Us</h1>
          <div className="contactInfo">
            <p>
              <span>Address:</span> Sofia, Bulgaria
            </p>
            <p>
              <span>Phone:</span> +359 88 8123456
            </p>
            <p>
              <span>Email:</span> purchases@takeouts.bg
            </p>
          </div>
        </div>
        <Email />
      </div>
    </div>
  );
}

export default Contact;
