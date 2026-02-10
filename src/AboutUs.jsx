import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Paradise Nursery</h1>
      <p className="muted">
        Welcome to Paradise Nursery — your online plant shop for beautiful house plants.
      </p>

      <button className="btn" onClick={() => navigate("/products")}>
        Start Shopping
      </button>
    </div>
  );
}
