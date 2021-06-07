import React from "react";

function Footer() {
  var y = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {y}</p>
    </footer>
  );
}

export default Footer;
