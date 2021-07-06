import React, {Component} from "react";
import {Link} from "react-router-dom";
import {DataContext} from "../Context";
import '../css/Products.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {Col, Row} from "react-bootstrap";

export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products} = this.context;
        return (
            <div>
                <h3>สินค้าใหม่</h3>

                <div id={"product"}>

                    {
                        products.map(product =>(
                            <div className="card" key={product._id}>
                                <Row>
                                    <Col>
                                        <FontAwesomeIcon icon={faCheckCircle}/> มีสินค้า
                                    </Col>
                                </Row>
                                <Link to={`/product/${product._id}`}>
                                    <img src={product.src} alt=""/>
                                </Link>
                                <div className="content">
                                    <p>
                                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                                    </p>
                                    <span>THB {product.price}</span>
                                    <div id={'sale'}>THB {product.sale}</div>
                                    <button to="/cart" onClick={()=>this.context.addCart(product._id)}>Add to cart</button>

                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            )
    }
}

export default Products