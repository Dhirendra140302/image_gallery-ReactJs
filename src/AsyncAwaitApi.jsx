import { useEffect, useState } from "react";

let AsynchAwaitApi = () => {
  let [image, setImage] = useState([]);
  let [search, setSearch] = useState("");
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);

  // fetch images using async / await
  const getImage = async () => {
    try {
      setLoading(true);
      setError(false); //  reset error before new fetch

      let res = await fetch(
        `https://pixabay.com/api/?key=54120262-584071e46a5989afc13017afb&q=${search}&image_type=photo&pretty=true`
      );

      let data = await res.json();
      setImage(data.hits);

      if (data.hits.length === 0) {
        setError(true);
      } else {
        setError(false);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      setError(true); //  handle fetch error
    } finally {
      setLoading(false);
    }
  };

  // fetch default images when component loads
  useEffect(() => {
    getImage();
  }, []);

  // search when Enter key is pressed
  const enterButton = (e) => {
    if (e.key === "Enter") {
      getImage();
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search image"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={enterButton}
      />

      <button onClick={getImage}>Search</button>

      <br />
      <br />
      {loading && <p>loading data....!!!!!</p>}
      {error && <strong>image not found....!!!!!</strong>}

      <div className="gallery">
        {!loading &&
          image.map((res) => (
            <img key={res.id} src={res.webformatURL} alt={res.user} />
          ))}
      </div>
    </>
  );
};

export default AsynchAwaitApi;
