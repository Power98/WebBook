import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {DataContext} from '../Context'
import '../css/Detail.css'
import '../css/Cart.css'


export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }

    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
        }else{
            return (
                <>
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item._id}>
                                <img src={item.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                    </div>
                                    <p> {item.author}<br/>
                                        {item.publisher}<br/>
                                        {item.category}<br/>
                                        {item.type}<br/>
                                        {item.barcode}<br/>
                                    </p>
                                    <div className="price">
                                        <h4>ราคา</h4>
                                        <h3>THB{item.sale}.00</h3>
                                        <h5>$THB{item.price}</h5>
                                    </div>

                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item._id)}> - </button>
                                        <span className="num">{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/payment">ไปชำระเงิน</Link>
                        <h3>Total:${total} </h3>
                    </div>
                </>
            )
        }

        }


}

export default Cart
