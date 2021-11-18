import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Developer Trek Thus Far!</h1>
        <p className="pl-desc">
          Please browse through my resume, as well as a list of previous projects, from basic html & css to full stack with sequelize, nodejs, mongodb, graphQL & a whole lot more to come.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
          
        ))}
      </div>
    </div>
  );
};

export default ProductList;