import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [apiResponseData, setApiResponseData] = useState();

  const getTodos = () => {
    setApiResponseData("loading");
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((axiosResponse) => {
        setApiResponseData(axiosResponse.data);
      })
      .catch((err) => {
        console.log("CATCH FUNCTION HAS BEEN RAN! AN ERROR HAS OCCURED: ", err);
        setApiResponseData(null);
      });
  };

  const renderResponse = () => {
    if (apiResponseData === "loading") {
      return <h3>Loading</h3>;
    } else if (apiResponseData === null) {
      return <h1>There has been an error in the API</h1>;
    } else if (apiResponseData !== undefined) {
      return apiResponseData.map((item) => {
        return (
          <div
            style={{
              width: "50%",
              border: "1px solid black",
              marginTop: "10px",
            }}
          >
            <h1>Post ID: {item.id}</h1>
            <h1>Title: {item.title}</h1>
            <p>Body: {item.body}</p>
          </div>
        );
      });
    }
  };

  return (
    <div className="App">
      <button onClick={getTodos}>Click me to get all the todos</button>
      {renderResponse()}
    </div>
  );
}

export default App;
