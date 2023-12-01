export function ProductsShow(props) {
  return (
    <div>
      <h1>{props.product.name}</h1>
      <img src={props.product.images[0].url} alt="" />
      <h3>{props.product.description}</h3>
      <h3>Price: {props.product.price}</h3>
      <div>Quantity:</div>
      <div>
        <input type="text" />
      </div>
      <div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
