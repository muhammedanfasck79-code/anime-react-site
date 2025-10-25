import React from "react";
import Navbar2 from "./Navbar2";

function Season() {
  const animeList = [
    {
      title: "Code Geass: Lelouch of the Rebellion",
      image: "https://cdn.wallpapersafari.com/11/2/gwqPKJ.jpg",
      description:
        "Lelouch leads a rebellion against the Holy Britannian Empire using his intelligence, strategy, and mysterious Geass power.",
      comingSoon: false,
    },
    {
      title: "Clannad",
      image: "https://images5.alphacoders.com/755/755821.png",
      description:
        "Follow Tomoya and Nagisa as they navigate school life, family, and the challenges of growing up in this heartwarming slice-of-life story.",
      comingSoon: false,
    },
    {
      title: "Gurren Lagann",
      image: "https://i.pinimg.com/736x/96/d3/c1/96d3c1e8ee7d4ac792199ca833bc9a4c.jpg",
      description:
        "Epic mecha battles and over-the-top action as Simon and Kamina fight to free humanity from the underground oppression.",
      comingSoon: true,
    },
    {
      title: "New Anime Movie",
      image: "https://cdn.posteritati.com/posters/000/000/075/293/castle-in-the-sky-md-web.jpg",
      description:
        "An upcoming cinematic anime adventure with breathtaking visuals and an unforgettable story.",
      comingSoon: true,
    },
  ];

  return (
    <div>
      <Navbar2 />

      <div
        style={{
          minHeight: "100vh",
          padding: "120px 20px 40px",
          backgroundColor: "#0d0d0d",
          color: "#fff",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "50px",
            fontFamily: "'Poppins', sans-serif",
            textShadow: "2px 2px 15px #000",
          }}
        >
          🎬 Winter 2007 Season Anime
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {animeList.map((anime, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 15px 30px rgba(0,0,0,0.7)",
                cursor: "pointer",
                transition: "all 0.4s ease",
                background: "#1a1a1a",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.7)";
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={anime.image}
                  alt={anime.title}
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                    filter: anime.comingSoon ? "brightness(0.6) blur(1px)" : "brightness(0.75)",
                    transition: "all 0.4s ease",
                  }}
                />
                {anime.comingSoon && (
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
                      color: "#fff",
                      padding: "8px 16px",
                      borderRadius: "10px",
                      fontWeight: "bold",
                      fontSize: "15px",
                      textShadow: "1px 1px 6px #000",
                    }}
                  >
                    Coming Soon
                  </div>
                )}
              </div>

              <div style={{ padding: "20px", backgroundColor: "#1f1f1f" }}>
                <h2
                  style={{
                    margin: "0 0 12px",
                    fontSize: "24px",
                    fontWeight: "600",
                  }}
                >
                  {anime.title}
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#ddd" }}>
                  {anime.description}
                </p>

                {anime.comingSoon ? (
                  <p
                    style={{
                      marginTop: "15px",
                      fontStyle: "italic",
                      color: "#ff4b2b",
                      fontWeight: "bold",
                    }}
                  >
                    Stay tuned! This anime is launching soon 🎉
                  </p>
                ) : (
                  <button
                    style={{
                      marginTop: "15px",
                      padding: "12px 25px",
                      background: "linear-gradient(135deg, #61dafb, #21a1f1)",
                      color: "#000",
                      border: "none",
                      borderRadius: "10px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      fontSize: "16px",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                    onClick={() => alert(`Booking ticket for ${anime.title}`)}
                  >
                    🎟 Book Ticket
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
       <footer style={{ backgroundColor: "#111", color: "#fff", textAlign: "center", padding: "30px 20px" }}>
        <p style={{ margin: 0, fontSize: "16px" }}>
          © 2025 Anime Tickets. Created by <strong>Muhammed Anfas</strong>
        </p>
      </footer>
    </div>
  );
}

export default Season;
