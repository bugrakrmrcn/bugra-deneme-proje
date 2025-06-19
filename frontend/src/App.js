import React, { useState, useRef } from "react";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // En başa sar
      videoRef.current.play();
    }
  };

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Hoşgeldin, {user}!</h2>
      <video
        ref={videoRef}
        src="/kaplan.mp4"
        width="480"
        controls={false}
        style={{ borderRadius: 16, background: "#000", marginBottom: 16 }}
        poster="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?fit=crop&w=600&q=80"
      />
      <div style={{ marginTop: 24 }}>
        <button
          onClick={handlePlay}
          style={{
            padding: "16px 44px",
            background: "#ffa726",
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
            border: "none",
            borderRadius: 12,
            boxShadow: "0 2px 8px #0002",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          KÜKRE!
        </button>
      </div>
    </div>
  );
}

export default App;