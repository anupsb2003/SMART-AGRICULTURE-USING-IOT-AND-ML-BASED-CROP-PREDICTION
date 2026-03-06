import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">

      <div className="logo">
        🌿 Agro Grow
      </div>

      <div className="menu">
        <a>Home</a>
        <a>About</a>
        <a>Solutions</a>
        <a>Blog</a>
        <a>Contact Us</a>
      </div>

      <button className="startBtn">
        Get Started →
      </button>

    </div>
  );
}