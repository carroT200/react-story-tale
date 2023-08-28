import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ProductDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productName}</p>
    </section>
  );
};

export default ProductDetail;
