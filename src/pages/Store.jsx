import React from "react";
import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productsStore";
import ProductCard from "../components/ProductCard";

function Store() {
  return (
    <div>
      <h1 align="center" className="p-3">
        Welcome to Store
      </h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, index) => {
          return (
            <Col align="center" key={index}>
             <ProductCard my_product={product} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Store;
