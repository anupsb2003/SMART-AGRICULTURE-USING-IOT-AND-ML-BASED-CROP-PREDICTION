import "./Contact.css";

export default function Contact() {
  return (

    <section
      id="contact"
      className="contact-section"
    >

      <div className="contact-card">

        <h2 className="contact-title">
          Contact Us
        </h2>

        <form className="contact-form">

          <input
            className="contact-input"
            type="text"
            placeholder="Your Name"
          />

          <input
            className="contact-input"
            type="email"
            placeholder="Email Address"
          />

          <textarea
            className="contact-textarea"
            placeholder="Your Message"
          ></textarea>

          <button className="contact-button">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}