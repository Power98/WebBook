import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import '../css/Detail.css'




export class Detail extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item._id === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }



    render() {
        const {product} = this.state;
        const {addCart,increase,reduction} = this.context;
        return (
            <>
                {
                    product.map(item =>(
                        <div className="details" key={item._id}>
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
                                    <span><h5>$THB{item.price}</h5></span>
                                </div>
                                <div className="amount">
                                    <button className="count" onClick={() => reduction(item._id)}> - </button>
                                    <span className="num">{item.count}</span>
                                    <button className="count" onClick={() => increase(item._id)}> + </button>
                                </div>
                                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                    Add to cart
                                </Link>
                                <Link className="wishlish">
                                    Wishlish
                                </Link>

                                <div className="about">
                                    <Link>
                                        เกี่ยวกับสินค้า
                                    </Link>
                                </div>

                            </div>
                        </div>

                    ))



                }
            </>
        )
    }
}

export default Detail
