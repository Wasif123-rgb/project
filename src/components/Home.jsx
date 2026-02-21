import { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Grass & Grain</h2>

        <div className="nav-links">
          <Link to="/restaurants">Restaurants</Link>
          <a href="#">Turf</a>

          <Link to="/login">Login</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Grass & Grain</h1>
          <p>Where Matches Meet Meals.</p>

          <div className="hero-buttons">
            <button className="primary-btn">Find Restaurants</button>
            <button className="secondary-btn">Book Turf</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="card">
          🍴
          <h3>Restaurant Booking</h3>
          <p>Reserve your favorite restaurants.</p>
        </div>

        <div className="card">
          ⚽
          <h3>Turf Reservation</h3>
          <p>Book turf easily.</p>
        </div>

        <div className="card">
          📱
          <h3>Online Access</h3>
          <p>Manage bookings online.</p>
        </div>
      </section>

      <footer>
        © 2026 Grass & Grain
      </footer>
    </>
  );
}
