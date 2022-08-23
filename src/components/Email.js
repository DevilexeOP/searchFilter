import React, { useState } from "react";
import JASONDATA from "../MOCK_DATA.json";

export default function Email() {
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      <input
        type="email"
        placeholder="Search Emails....."
        onChange={(event) => setEmail(event.target.value)}
      />
      {JASONDATA.filter((val) => {
        if (email === "") {
          return val;
        } else if (val.email.toLowerCase().includes(email.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.email}</p>
          </div>
        );
      })}
    </div>
  );
}
