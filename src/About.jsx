import React from "react";
import Navbar2 from "./Navbar2";

function About() {
  return (
    <div>
      {/* Navbar */}
      <Navbar2 />

      {/* About Content */}
      <div
        style={{
          minHeight: "100vh",
          backgroundImage:
            "url('https://i.pinimg.com/474x/c3/85/4d/c3854d2155297aade23083276795455b.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px 20px",
          boxSizing: "border-box",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 0,
          }}
        ></div>

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              marginBottom: "30px",
              textShadow: "2px 2px 10px #000",
            }}
          >
            🎬 Winter 2007 Anime
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
              marginBottom: "20px",
              textAlign: "justify",
            }}
          >
            Winter 2007 was a remarkable season for anime fans across the globe...
          </p>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
              marginBottom: "20px",
              textAlign: "justify",
            }}
          >
            Fans were treated to a variety of genres that ranged from epic battles...
          </p>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
              textAlign: "justify",
            }}
          >
            Dive into the rich history of this season, relive your favorite moments...
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div
        style={{
          backgroundColor: "#f4f4f4",
          color: "#333",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "40px", color: "#ff3b3f" }}>
          Contact Us
        </h2>

        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          Email: <a href="mailto:info@animehub.com">info@animehub.com</a>
        </p>
        <p style={{ fontSize: "18px", marginBottom: "40px" }}>
          Website: <a href="https://www.animehub.com" target="_blank" rel="noopener noreferrer">www.animehub.com</a>
        </p>

        {/* Contact Form */}
        <form
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for contacting us! We will get back to you soon.");
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
          <textarea
            placeholder="Your Message"
            required
            rows="6"
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              backgroundColor: "#ff6f61",
              color: "#fff",
              border: "none",
              padding: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default About;

