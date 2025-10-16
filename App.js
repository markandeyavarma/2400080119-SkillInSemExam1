import React from "react";
import Card from "./Card";

export default function App() {
  return (
    <div style={{ maxWidth: 720, margin: "40px auto", display: "grid", gap: 16 }}>
      <Card>
        <h2>Simple Text</h2>
        <p>This paragraph and heading are wrapped by the same Card style.</p>
      </Card>
      <Card as="section">
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Email:
            <input type="email" placeholder="you@example.com" style={{ display: "block", marginTop: 8 }} />
          </label>
          <button style={{ marginTop: 12 }}>Submit</button>
        </form>
      </Card>
      <Card className="profile">
        <img src="https://via.placeholder.com/72" alt="avatar" style={{ borderRadius: "50%" }} />
        <h3 style={{ marginTop: 8 }}>Ada Lovelace</h3>
        <p>First computer programmer. Loves math & machines.</p>
      </Card>
    </div>
  );
}
