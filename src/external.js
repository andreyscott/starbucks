import React, { useEffect } from "react";

function External() {

  useEffect(() => {
    window.location.href = "https://www.andrewIrorere.tech";
  }, []);

  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

export default External;