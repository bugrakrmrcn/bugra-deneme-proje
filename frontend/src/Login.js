import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 80 }}>
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Kullanıcı adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: 8, fontSize: 16 }}
        />
        <button
          type="submit"
          style={{
            marginLeft: 8,
            padding: "8px 20px",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Giriş
        </button>
      </form>
    </div>
  );
}