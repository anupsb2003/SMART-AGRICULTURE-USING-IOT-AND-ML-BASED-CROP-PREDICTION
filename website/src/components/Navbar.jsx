import "./Navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="navbar">

      <div className="logo">
        🌿 Agro Grow
      </div>

      <div className="menu">
        <Link to="home" smooth={true} duration={500}>Home</Link>

        <Link to="about" smooth={true} duration={500}>About</Link>

        <Link to="solutions" smooth={true} duration={500}>Solutions</Link>

        <Link to="blog" smooth={true} duration={500}>Blog</Link>

        <Link to="contact" smooth={true} duration={500}>Contact Us</Link>

      </div>

      <button className="startBtn">
        Get Started →
      </button>

    </div>
  );
}