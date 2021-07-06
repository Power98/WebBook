import React,{Component} from "react";

export const  DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "รสชาติของผลไม้ที่ยังไม่สุขงอม",
                "src": "https://images-se-ed.com/ws/Storage/Originals/978616/184/9786161840488L.jpg?h=db11440ee68277bdf8468bc65e7f7c11",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 599,
                "sale": 499,
                "author": "ผู้เขียน : โซนัมจู",
                "publisher": "สำนักพิมพ์ : Piccolo",
                "category": "หมวดหมู่ : วรรณกรรมเรื่องสั้น",
                "type": "ประเภทของสินค้า : Books",
                "barcode": "บาร์โค้ด : 9786167840488",
                "count": 1
            },
            {
                "_id": "2",
                "title": "รสชาติของผลไม้ที่ยังไม่สุขงอม",
                "src": "https://images-se-ed.com/ws/Storage/Originals/978616/184/9786161840488L.jpg?h=db11440ee68277bdf8468bc65e7f7c11",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 599,
                "sale": 499,
                "author": "ผู้เขียน : โซนัมจู",
                "publisher": "สำนักพิมพ์ : Piccolo",
                "category": "หมวดหมู่ : วรรณกรรมเรื่องสั้น",
                "type": "ประเภทของสินค้า : Books",
                "barcode": "บาร์โค้ด : 9786167840488",
                "count": 1
            },
            {
                "_id": "3",
                "title": "รสชาติของผลไม้ที่ยังไม่สุขงอม",
                "src": "https://images-se-ed.com/ws/Storage/Originals/978616/184/9786161840488L.jpg?h=db11440ee68277bdf8468bc65e7f7c11",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 599,
                "sale": 499,
                "author": "ผู้เขียน : โซนัมจู",
                "publisher": "สำนักพิมพ์ : Piccolo",
                "category": "หมวดหมู่ : วรรณกรรมเรื่องสั้น",
                "type": "ประเภทของสินค้า : Books",
                "barcode": "บาร์โค้ด : 9786167840488",
                "count": 1
            },
            {
                "_id": "4",
                "title": "รสชาติของผลไม้ที่ยังไม่สุขงอม",
                "src": "https://images-se-ed.com/ws/Storage/Originals/978616/184/9786161840488L.jpg?h=db11440ee68277bdf8468bc65e7f7c11",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 599,
                "sale": 499,
                "author": "ผู้เขียน : โซนัมจู",
                "publisher": "สำนักพิมพ์ : Piccolo",
                "category": "หมวดหมู่ : วรรณกรรมเรื่องสั้น",
                "type": "ประเภทของสินค้า : Books",
                "barcode": "บาร์โค้ด : 9786167840488",
                "count": 1
            },
            {
                "_id": "5",
                "title": "รสชาติของผลไม้ที่ยังไม่สุขงอม",
                "src": "https://images-se-ed.com/ws/Storage/Originals/978616/184/9786161840488L.jpg?h=db11440ee68277bdf8468bc65e7f7c11",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 599,
                "sale": 499,
                "author": "ผู้เขียน : โซนัมจู",
                "publisher": "สำนักพิมพ์ : Piccolo",
                "category": "หมวดหมู่ : วรรณกรรมเรื่องสั้น",
                "type": "ประเภทของสินค้า : Books",
                "barcode": "บาร์โค้ด : 9786167840488",
                "count": 1
            }
        ],
        cart:[],
        total: 0

    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if (check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{

        }

        const data = products.filter(product =>{
            return product._id === id
        })
        this.setState({cart: [...cart,...data]})
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();

    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();

    };

    removeProduct = id =>{
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();


    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.sale * item.count);
        },0)
        this.setState({total: res})
    };

    render() {
        const {products, cart, total} = this.state;
        const {addCart, reduction, increase, removeProduct, getTotal} = this;
        return (
            <div>
                <DataContext.Provider value={{products, addCart,cart, reduction, increase, removeProduct, total, getTotal}}>
                    {this.props.children}
                </DataContext.Provider>
            </div>
        )
    }
}