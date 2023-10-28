import AddToCart from './AddToCart';
import styles from './ProductCard.module.scss';

const ProductCard = () => {
  return (
    <div className="my-5 bg-sky-400 p-5 text-xl text-white hover:bg-sky-500">
      ProductCard
      <AddToCart />
    </div>
  );
};

export default ProductCard;
