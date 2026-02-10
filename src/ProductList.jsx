import { useDispatch } from "react-redux";
import { addToCart } from "./store/CartSlice";

const plants = [
  { id: 1, name: "Lavender", description: "Aromatic plant with calming fragrance.", price: 12, image: "https://via.placeholder.com/240x150?text=Lavender", category: "Aromatic Plants" },
  { id: 2, name: "Mint", description: "Fresh aroma, easy to grow indoors.", price: 8, image: "https://via.placeholder.com/240x150?text=Mint", category: "Aromatic Plants" },
  { id: 3, name: "Rosemary", description: "Woody herb with a strong scent.", price: 10, image: "https://via.placeholder.com/240x150?text=Rosemary", category: "Aromatic Plants" },
  { id: 4, name: "Aloe Vera", description: "Medicinal plant, low maintenance.", price: 15, image: "https://via.placeholder.com/240x150?text=Aloe+Vera", category: "Medicinal Plants" },
  { id: 5, name: "Snake Plant", description: "Hardy plant that helps improve air quality.", price: 18, image: "https://via.placeholder.com/240x150?text=Snake+Plant", category: "Medicinal Plants" },
  { id: 6, name: "Peace Lily", description: "Elegant indoor plant for a fresh space.", price: 20, image: "https://via.placeholder.com/240x150?text=Peace+Lily", category: "Medicinal Plants" },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const categories = ["Aromatic Plants", "Medicinal Plants"];

  return (
    <div className="page">
      <h2>Product Listing</h2>

      {categories.map((cat) => (
        <div key={cat} className="section">
          <h3>{cat}</h3>

          <div className="grid">
            {plants
              .filter((p) => p.category === cat)
              .map((p) => (
                <div key={p.id} className="card">
                  <img className="img" src={p.image} alt={p.name} />
                  <h4>{p.name}</h4>
                  <p className="muted">{p.description}</p>

                  <div className="row between">
                    <span className="price">${p.price}</span>
                    <button className="btn" onClick={() => dispatch(addToCart(p))}>
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
