import axios from "axios";

export const fetchData = async (setResponse, response) => {
  try {
    setResponse({ ...response, isLoading: true });
    const res = await axios.get("http://localhost:4000/");
    if (res.status === 200) {
      setResponse({ ...response, data: res.data, isLoading: false });
    } else {
      setResponse({ ...response, error: true, isLoading: false });
    }
  } catch (err) {
    console.log(err, "err");
    setResponse({ ...response, error: true, isLoading: false });
  }
};
