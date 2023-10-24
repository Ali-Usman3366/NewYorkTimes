import React from "react";
import { ReactComponent as ReactLogo } from "../assets/Logo.svg";

const Header = () => {
  return (
    <>
      <div style={{ ...styles.logoContainer, ...styles.display }}>
        <div
          style={{
            width: "30%",
          }}
        >
          <ReactLogo />
        </div>
      </div>
      <h1 style={styles.headingText}>Read Top Stories From NewYork Times</h1>
    </>
  );
};

export default Header;

const styles = {
  display: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    padding: "18px 0px 6px 0px",
    background: "#fff",
    boxShadow: "0px 0px 16px 0px #eaeaea",
  },
  headingText: { textAlign: "center", padding: "8px 0px" },
};
