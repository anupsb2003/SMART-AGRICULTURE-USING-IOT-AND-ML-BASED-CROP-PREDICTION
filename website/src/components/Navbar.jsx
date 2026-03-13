import "./Navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="navbar">

      <div className="logo">
        🌿 Agro Grow
      </div>

      <div className="menu">
        <Link to="Home" smooth duration={500}>Home</Link>
        <Link to="about" smooth duration={500}>About</Link>
<Link to="solutions" smooth duration={500}>Solutions</Link>
<Link to="blog" smooth duration={500}>Blog</Link>
<Link to="contact" smooth duration={500}>Contact</Link>
<Link to="cropPrediction" smooth duration={500}>Crop Prediction</Link>

      </div>

      <button className="startBtn">
        Get Started →
      </button>

    </div>
  );
}