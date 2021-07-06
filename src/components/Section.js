import React , { Component } from "react";
import Products from "./section/Products";
import Detail from "./section/Detail";
import {Route} from 'react-router-dom';
import CarouselComponent from "./CarouselComponent";
import ProductsRecommend from "./section/ProductsRecommend";
import Cart from "./section/Cart";
import Payment from "./section/Payment";


export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={CarouselComponent} exact  />
                <Route path="/" component={Products} exact  />
                <Route path="/" component={ProductsRecommend} exact  />
                <Route path="/product" component={Products} exact  />
                <Route path="/ProductsRecommend" component={ProductsRecommend} />
                <Route path="/product/:id" component={Detail} />
                <Route path="/product/:id" component={Products} />
                <Route path="/Cart" component={Cart} />
                <Route path="/payment" component={Payment} />
            </section>
        )
    }
}