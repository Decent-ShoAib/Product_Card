import React from "react";
import Data from "./Data"

const Card = () => {
  return (
    <div style={styles.container}>
      {Data.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.title} style={styles.image} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "16px",
    backgroundColor:"rgba(136, 190, 139, 1"
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    maxWidth: "300px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.34)",
    backgroundColor:"rgba(174, 244, 179, 1"
  },
  image: {
    maxWidth: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
};

export default Card;
