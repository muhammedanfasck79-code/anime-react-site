import { useState, useEffect } from "react"; 
import Navbar2 from "./Navbar2"; 

function Github() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [heroIndex, setHeroIndex] = useState(0);

  const heroImages = [
    "https://cdn.posteritati.com/posters/000/000/039/676/detective-conan-md-web.jpg",
    "https://m.media-amazon.com/images/M/MV5BODhkNDhmNzktODFmMC00NDZiLWEzN2UtY2YwYzgzYTVlMWZmXkEyXkFqcGc@._V1_.jpg",
    "https://www.rukita.co/stories/wp-content/uploads/2019/12/erased.jpg"
  ];

  const getData = async () => {
    try {
      const res = await fetch("https://api.jikan.moe/v4/seasons/2007/winter?sfw");
      const data = await res.json();
      setAnimeList(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <h3 style={{ textAlign: "center", marginTop: "50px" }}>Loading anime...</h3>;
  if (error) return <h3 style={{ textAlign: "center", marginTop: "50px" }}>Error: {error}</h3>;

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#f9f9f9" }}>
      <Navbar2 />

      {/* Hero Section */}
      <section
        style={{
          color: "#fff",
          textAlign: "center",
          padding: "120px 20px",
          backgroundImage: `url('${heroImages[heroIndex]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          transition: "background-image 1s ease-in-out",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)",
          zIndex: 0,
          transition: "background 1s ease-in-out"
        }}></div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{
            fontSize: "60px",
            fontWeight: "900",
            marginBottom: "20px",
            textShadow: "3px 3px 12px rgba(0,0,0,0.7)",
            lineHeight: "1.2",
            animation: "fadeInDown 1s ease forwards"
          }}>
            🎬 Winter 2007 Anime
          </h1>
          <p style={{
            fontSize: "22px",
            maxWidth: "700px",
            margin: "0 auto 30px",
            textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
            animation: "fadeInUp 1.2s ease forwards"
          }}>
            Book your seat for your favorite anime movies and series now!
          </p>
        </div>

        <style>{`
          @keyframes fadeInDown {
            0% {opacity: 0; transform: translateY(-50px);}
            100% {opacity: 1; transform: translateY(0);}
          }
          @keyframes fadeInUp {
            0% {opacity: 0; transform: translateY(50px);}
            100% {opacity: 1; transform: translateY(0);}
          }
        `}</style>
      </section>

      {/* Movie Tickets Section */}
      <div style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#1a1a1a" }}>
        <h2 style={{ fontSize: "40px", marginBottom: "50px", color: "#ff3b3f", fontWeight: "900" }}>
          🎬 Anime Movie Tickets
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
          {animeList.slice(0, -1).map((anime) => (
            <div
              key={anime.mal_id}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                width: "280px",
                background: "linear-gradient(145deg, #ff6f61, #ff3b3f)",
                color: "#fff",
                boxShadow: "0 15px 30px rgba(0,0,0,0.5)",
                transition: "transform 0.4s, box-shadow 0.4s",
                cursor: "pointer",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-15px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 25px 40px rgba(0,0,0,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.5)";
              }}
            >
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                style={{ width: "100%", height: "320px", objectFit: "cover", borderBottom: "5px solid #fff" }}
              />
              <div style={{ padding: "20px", textAlign: "left" }}>
                <h3 style={{ margin: "0 0 10px", fontSize: "20px", fontWeight: "bold", textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}>
                  {anime.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: "1.4", color: "#f0f0f0", height: "50px", overflow: "hidden" }}>
                  {anime.synopsis?.slice(0, 100)}...
                </p>
                <div style={{ marginTop: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{
                    backgroundColor: "#fff",
                    color: "#ff3b3f",
                    fontWeight: "bold",
                    padding: "5px 12px",
                    borderRadius: "8px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
                  }}>
                    ₹499
                  </span>
                  <button
                    style={{
                      backgroundColor: "#ff3b3f",
                      color: "#fff",
                      border: "none",
                      borderRadius: "12px",
                      padding: "8px 16px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
                    }}
                    onClick={() => alert(`🎬 You bought a ticket for "${anime.title}" — ₹499`)}
                  >
                    Buy Now ➜
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "#111", color: "#fff", textAlign: "center", padding: "30px 20px" }}>
        <p style={{ margin: 0, fontSize: "16px" }}>
          © 2025 Anime Tickets. Created by <strong>Muhammed Anfas</strong>
        </p>
      </footer>
    </div>
  );
}

export default Github;

