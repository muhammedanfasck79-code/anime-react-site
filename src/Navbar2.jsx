 import React from "react";
import { Link } from "react-router-dom";
import About from "./About";

function Navbar2() {
  return (
    <nav
      style={{
        backgroundColor: "#1f1f1f",
        color: "#fff",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/004/967/183/small/anime-eyes-vision-fire-pop-culture-logo-design-vector.jpg"
          alt="Anime logo"
          style={{ width: "32px", height: "32px" }}
        />
        <h2 style={{ margin: 0, fontSize: "20px", letterSpacing: "1px" }}>Anime Explorer</h2>
      </div>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "24px",
          margin: 0,
          fontSize: "16px",
        }}
      >
        <li>
          <Link to="/github" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
        </li>
        <li>
          <Link to="/season" style={{ color: "#fff", textDecoration: "none" }}>Seasons</Link>
        </li>
        {/* <li>
          <Link to="" style={{ color: "#fff", textDecoration: "none" }}>Top Anime</Link>
        </li> */}
        <li>
         <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
        </li>
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <input
          type="text"
          placeholder="Search anime..."
          style={{
            padding: "6px 10px",
            borderRadius: "4px",
            border: "1px solid #555",
            backgroundColor: "#2c2c2c",
            color: "#fff",
            outline: "none",
          }}
        />
        <button
          style={{
            backgroundColor: "#61dafb",
            border: "none",
            borderRadius: "4px",
            padding: "6px 10px",
            cursor: "pointer",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          🔍
        </button>
      </div>
      
    </nav>
  );
}

export default Navbar2;
