export const styles = {
  display: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyImage: {
    height: 200,
    width: "100%",
  },
  cards: {
    boxShadow: "0px 0px 4px 0px #efefef",
    width: 300,
  },
  rootContainer: {
    display: "flex",
    gap: "1rem",
    flexFlow: "wrap",
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: "center",
    background: "#fafafa",
    padding: 0,
    margin: 0,
  },
  sectionText: {
    position: "absolute",
    top: -1,
    left: -1,
    textTransform: "capitalize",
    marginTop: 0,
    borderRadius: "0 0 5px 0",
    color: "#333",
    fontSize: "12px",
    padding: "4px 6px",
    background: "#fafafa",
  },
  fallbackRootContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#f00",
    flexDirection: "column",
  },
  logoContainer: {
    padding: "18px 0px 6px 0px",
    background: "#fff",
    boxShadow: "0px 0px 16px 0px #eaeaea",
  },
  headingText: { textAlign: "center", padding: "8px 0px" },
  spinnerContainer: {
    width: "100%",
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
