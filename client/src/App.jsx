import React, { useEffect, useState } from "react";
import { fetchData } from "./utils";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Loader from "react-js-loader";
import Fallback from "./Components/Fallback";

const App = () => {
  const [response, setResponse] = useState({
    data: [],
    error: false,
    isLoading: true,
  });

  useEffect(() => {
    fetchData(setResponse, response);
  }, []);

  return (
    <>
      {response.error ? (
        <Fallback />
      ) : (
        <>
          <Header />
          {response.isLoading ? (
            <div style={styles.spinnerContainer}>
              <Loader
                type="spinner-default"
                bgColor={"#333"}
                color={"#fafafa"}
                title={"Loading"}
                size={80}
              />
            </div>
          ) : (
            <Cards data={response.data} />
          )}
        </>
      )}
    </>
  );
};
export default App;

//style
const styles = {
  spinnerContainer: {
    width: "100%",
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
