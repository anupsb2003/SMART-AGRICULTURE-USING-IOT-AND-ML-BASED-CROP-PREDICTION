export default function Contact() {
  return (
    <section id="contact" style={{ padding: "80px", textAlign: "center" }}>

      <h2>Contact Us</h2>

      <form style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px", margin: "auto" }}>

        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Email Address" />

        <textarea placeholder="Your Message"></textarea>

        <button>Send Message</button>

      </form>

    </section>
  );
}