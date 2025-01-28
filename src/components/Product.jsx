import React from "react";

const Product = ({ product, addToCart }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        width: "200px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <img
        src={product.img}
        alt={product.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />
      <h3 style={{ fontSize: "1.2rem", margin: "10px 0" }}>{product.name}</h3>
      {/* Description with two-line clamp */}
      <p
        style={{
          fontSize: "0.9rem",
          color: "#555",
          margin: "10px 0",
          lineHeight: "1.2rem", // Adjust line height for two lines
          height: "2.4rem", // Ensure only two lines show
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 2, // Clamps text to 2 lines
          WebkitBoxOrient: "vertical",
        }}
      >
        {product.description}
      </p>
      <p style={{ fontSize: "1rem", color: "#333", margin: "10px 0" }}>
        ₹{product.price}
      </p>
      <button
        onClick={() => addToCart(product)}
        style={{
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
