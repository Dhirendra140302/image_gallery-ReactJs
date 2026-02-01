import { useEffect, useState } from "react";
import "./App.css";
import AsynchAwaitApi from "./AsyncAwaitApi";
import FetchingProduct from "./FetchingProduct";

let App = () => {
  let [image, setImage] = useState([]);
  let [search, setSearch] = useState("");

  // it will fetch data Automatically when we enter something in search box

  useEffect(() => {
    fetch(
      // here i change the particular search name with ${search}
      `https://pixabay.com/api/?key=54120262-584071e46a5989afc13017afb&q=${search}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data.hits);
      });
  }, [search]);

  // ======================================================================

  // on the place of writing fetch multiple time we can store it into one variable and call it

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=54120262-584071e46a5989afc13017afb&q=${search}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data.hits);
      });
  }, []);

  // here i created a function to fetch image by clicking on search button
  function getImage() {
    fetch(
      // here i change the particular search name with ${search}
      `https://pixabay.com/api/?key=54120262-584071e46a5989afc13017afb&q=${search}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data.hits);
      });
  }
  // here i created a function to fetch image by hiting enter key and called into search input box
  function enterButton(e) {
    if (e.key === "Enter") {
      getImage();
    } else {
      <h1>Image is not found</h1>;
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="search image"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={enterButton} // calling the enterButoon function to search data after hitting enter key
      />
      <button onClick={getImage}>Search</button>
      <br />
      <br />
      <div className="gallery">
        {image.map((res) => (
          <img key={res.id} src={res.webformatURL} alt={res.user} />
        ))}
      </div>

      {/* ===================================================== */}
      {/* <AsynchAwaitApi></AsynchAwaitApi> */}

      <FetchingProduct></FetchingProduct>
    </>
  );
};

export default App;
