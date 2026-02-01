import { useEffect, useState } from "react";
import Counter from "./Counter";
import ShimmerEffect from "./ShimmerEffect";

const FetchingProduct = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const productDetails = async () => {
      try {
        setLoading(true);

        const api = await fetch("https://fakestoreapi.com/products");
        const data = await api.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    productDetails();
  }, []);
  //https://css-loaders.com/polygons/(website for adding loader )
  if (loading) return <ShimmerEffect></ShimmerEffect>;

  //  Filtered Products
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          margin: "20px",
          fontSize: "16px",
        }}
      />

      <div className="container">
        {/*  Product Not Found Logic */}
        {filteredProducts.length === 0 ? (
          <div className="not-found">
            <span className="not-found-icon">🔍</span>
            <h2>Product Not Found</h2>
            <p>Try searching with a different keyword.</p>
          </div>
        ) : (
          filteredProducts.map((res) => (
            <div className="card" key={res.id}>
              <img src={res.image} alt={res.title} />
              <p className="title">{res.title}</p>
              <strong className="category">{res.category}</strong>
              <strong className="price">$ {res.price}</strong>

              <Counter />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default FetchingProduct;
