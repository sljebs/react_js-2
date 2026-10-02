export default function ProductItem({ product }) {
  return (
    <div className="product">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      <h2>{product.title}</h2>

      <p>{product.description}</p>

      <p className="price">${product.price}</p>

      <p>Rating: {product.rating.rate}</p>
    </div>
  );
  // Product item update
}