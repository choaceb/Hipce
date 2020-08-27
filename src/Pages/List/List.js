import React, { Component } from "react";
import Nav from "../../Components/Nav";
import ProductNav from "../List/ProductNav";
import ProductFilter from "./ProductFilter";
import Product from "./Product";
import ProductListBottom from "../List/ProductListBottom";
import Footer from "../../Components/Footer";
import "./List.scss";

class List extends Component {
  constructor() {
    super();
    this.state = {
      newColors: [],
    };
  }

  componentDidMount() {
    fetch(`http://3.17.134.84:8000/products?category=lip`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          newColors: res.products,
        })
      );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.hello !== this.props.match.params.hello)
      fetch(`http://3.17.134.84:8000/products?${this.props.match.params.hello}`)
        .then((res) => res.json())
        .then((res) =>
          this.setState({
            newColors: res.products,
          })
        );
  }

  getItem = (id, price) => {
    fetch("http://3.17.134.84:8000/products?category=lip", {
      method: "post",
      body: JSON.stringify({
        id: id,
        price: price,
        count: 1,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          console.log(1);
        }
      });
  };

  render() {
    const {
      state: { newColors },
    } = this;
    return (
      <div className="List">
        <Nav />
        <ProductNav newColors={newColors} />
        <ProductFilter titleName={this.props.match.params.hello} />
        <div className="productListContainer">
          <ul className="productList">
            {newColors.map(
              (
                { main_image, price, name, tag__image, sub_image, id },
                index
              ) => (
                <Product
                  id={id}
                  index={index}
                  mainImgSrc={main_image}
                  subImgSrc={sub_image}
                  price={price}
                  name={name}
                  tag={tag__image}
                  getItem={this.getItem}
                />
              )
            )}
          </ul>
        </div>
        <ProductListBottom />
        <Footer />
      </div>
    );
  }
}
export default List;
