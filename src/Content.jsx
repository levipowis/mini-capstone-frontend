import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";

export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductShowVisible, setIsProductShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    console.log("handleIndexPhotos");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleShowProduct = (product) => {
    console.log("handleShowProduct");
    setIsProductShowVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductShowVisible(false);
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <ProductsIndex products={products} onShowProduct={handleShowProduct} />
      <Modal show={isProductShowVisible} onClose={handleClose}>
        <ProductsShow product={currentProduct} />
      </Modal>
    </div>
  );
}
