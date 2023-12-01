export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.images[0].url} alt="" />
          <h3>{product.description}</h3>
          <h3>Price: {product.price} </h3>
          <button onClick={() => props.onShowProduct(product)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
