import { useState, useEffect } from "react";
import { fetchData } from "./api/http.js";
import "./App.css";

function App() {
  const [appState, setAppState] = useState({
    category: false,
    imgSrc: "",
  });
  const [imgLoading, setImgLoading] = useState(false);

  const dogs = () => setAppState((prev) => ({ ...prev, category: true }));
  const cats = () => setAppState((prev) => ({ ...prev, category: false }));

  async function newImage(category) {
    try {
      setImgLoading(true);
      const data = await fetchData(category);
      setAppState((prev) => ({ ...prev, imgSrc: data }));
    } catch (error) {
      console.error(error);
    } finally {
      setImgLoading(false);
    }
  }

  useEffect(() => {
    newImage(appState.category);
  }, [appState.category]);

  return (
    <>
      <div>
        {imgLoading ? (
          <p>Loading...</p>
        ) : (
          <img src={appState.imgSrc} alt="animal" />
        )}
      </div>
      <button onClick={() => newImage(appState.category)}>
        Generate new img
      </button>
      <button
        style={{ backgroundColor: appState.category ? "pink" : "grey" }}
        onClick={dogs}
      >
        Kutyusok
      </button>
      <button
        style={{ backgroundColor: !appState.category ? "pink" : "grey" }}
        onClick={cats}
      >
        Cicusok
      </button>
    </>
  );
}

export default App;
