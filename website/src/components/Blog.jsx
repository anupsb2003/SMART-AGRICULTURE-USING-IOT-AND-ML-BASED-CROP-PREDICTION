export default function Blog() {
  return (
    <section id="blog" style={{ padding: "80px", textAlign: "center" }}>

      <h2>Latest Blog</h2>

      <div style={{ display: "flex", gap: "30px", justifyContent: "center" }}>

        <div>
          <h3>Future of Smart Farming</h3>
          <p>
            Discover how IoT and AI are transforming modern agriculture.
          </p>
        </div>

        <div>
          <h3>Precision Agriculture</h3>
          <p>
            Learn how data-driven farming increases productivity.
          </p>
        </div>

      </div>

    </section>
  );
}