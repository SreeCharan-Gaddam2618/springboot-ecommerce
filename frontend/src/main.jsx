import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const products=[
 {id:1,name:'Classic Sneakers',price:2499},
 {id:2,name:'Premium Backpack',price:1899},
 {id:3,name:'Smart Watch',price:3999},
 {id:4,name:'Wireless Headphones',price:2999}
];

function App(){
 const [cart,setCart]=React.useState([]);
 const add=p=>setCart(c=>[...c,p]);
 return <div className="app">
  <header><h1>SreeCharan Store</h1><span>Cart ({cart.length})</span></header>
  <main><section className="hero"><h2>Modern E-Commerce Store</h2><p>Shop quality products with a fast, clean experience.</p></section>
  <section className="grid">{products.map(p=><article className="card" key={p.id}><div className="pic">{p.name[0]}</div><h3>{p.name}</h3><strong>₹{p.price.toLocaleString('en-IN')}</strong><button onClick={()=>add(p)}>Add to Cart</button></article>)}</section>
  {cart.length>0&&<aside className="cart"><h3>Your Cart</h3>{cart.map((p,i)=><div key={i}>{p.name} — ₹{p.price.toLocaleString('en-IN')}</div>)}<b>Total: ₹{cart.reduce((s,p)=>s+p.price,0).toLocaleString('en-IN')}</b></aside>}
  </main><footer>Spring Boot E-Commerce • Portfolio Project</footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
