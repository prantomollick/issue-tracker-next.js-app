import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500">
      ProductCard
      <AddToCart />
    </div>
  );
};

export default ProductCard;
