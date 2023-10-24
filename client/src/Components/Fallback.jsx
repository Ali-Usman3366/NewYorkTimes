import React from "react";
import FallbackImage from "../assets/fallback.png"

const Fallback = () => {
  return (
    <div style={styles.rootContainer}>
      <h1>Ops! Something Went Wrong.</h1>
        <img src={FallbackImage} alt="fallback-image" />
    </div>
  );
};

export default Fallback;

const styles = {
  rootContainer: {
    width: "100%",
    // height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color:"#f00",
    flexDirection:"column"
  },
};
