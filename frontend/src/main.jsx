import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const API = import.meta.env.VITE_API_URL || '';
const seed = [
  {id:1,name:'Classic Sneakers',price:2499,description:'Comfortable everyday sneakers',imageUrl:''},
  {id:2,name:'Premium Backpack',price:1899,description:'Durable everyday backpack',imageUrl:''},
  {id:3,name:'Smart Watch',price:3999,description:'Modern fitness smart watch',imageUrl:''},
  {id:4,name:'Wireless Headphones',price:2999,description:'Wireless over-ear headphones',imageUrl:''}
];

function App(){
 const [products,setProducts]=React.useState(seed),[cart,setCart]=React.useState([]),[loading,setLoading]=React.useState(true),[error,setError]=React.useState('');
 React.useEffect(()=>{fetch(`${API}/api/products`).then(r=>{if(!r.ok)throw new Error('API unavailable');return r.json()}).then(setProducts).catch(()=>setError(API?'Backend is unavailable. Showing demo products.':'Demo mode — connect VITE_API_URL to the Spring Boot API.')).finally(()=>setLoading(false))},[]);
 const add=p=>setCart(c=>[...c,p]); const total=cart.reduce((s,p)=>s+Number(p.price),0);
 return <div className="app"><header><h1>SreeCharan Store</h1><span>Cart ({cart.length})</span></header><main>
  <section className="hero"><h2>Modern E-Commerce Store</h2><p>Quality products with a clean, fast shopping experience.</p></section>
  {error&&<div className="notice">{error}</div>}
  <section className="grid">{products.map(p=><article className="card" key={p.id}><div className="pic">{p.imageUrl?<img src={p.imageUrl} alt={p.name}/>:p.name[0]}</div><h3>{p.name}</h3><p>{p.description}</p><strong>₹{Number(p.price).toLocaleString('en-IN')}</strong><button onClick={()=>add(p)}>Add to Cart</button></article>)}</section>
  {loading&&<p className="loading">Loading products…</p>}
  {cart.length>0&&<aside className="cart"><h3>Your Cart</h3>{cart.map((p,i)=><div key={i}>{p.name} — ₹{Number(p.price).toLocaleString('en-IN')}</div>)}<b>Total: ₹{total.toLocaleString('en-IN')}</b><button onClick={()=>alert('Checkout API is ready for the next payment integration step.')}>Checkout</button></aside>}
 </main><footer>Spring Boot E-Commerce • Portfolio Project</footer></div>
}
createRoot(document.getElementById('root')).render(<App/>);
