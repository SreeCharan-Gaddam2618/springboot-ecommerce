import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const API = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
const seed=[{id:1,name:'Classic Sneakers',price:2499,description:'Comfortable everyday sneakers',imageUrl:''},{id:2,name:'Premium Backpack',price:1899,description:'Durable everyday backpack',imageUrl:''},{id:3,name:'Smart Watch',price:3999,description:'Modern fitness smart watch',imageUrl:''},{id:4,name:'Wireless Headphones',price:2999,description:'Wireless over-ear headphones',imageUrl:''}];

async function getProducts(){const r=await fetch(`${API}/api/products`,{headers:{Accept:'application/json'}});if(!r.ok)throw new Error(`Backend returned ${r.status}`);return r.json()}
function App(){
 const [products,setProducts]=React.useState([]),[cart,setCart]=React.useState([]),[status,setStatus]=React.useState('Connecting to backend…');
 React.useEffect(()=>{getProducts().then(p=>{setProducts(p);setStatus(`Connected to Spring Boot API • ${p.length} products`)}).catch(()=>{setProducts(seed);setStatus(API?'Backend unavailable — showing demo products':'Set VITE_API_URL to your Spring Boot API URL')})},[]);
 const add=p=>setCart(c=>[...c,p]); const total=cart.reduce((s,p)=>s+Number(p.price),0);
 return <div className="app"><header><h1>SreeCharan Store</h1><span>Cart ({cart.length})</span></header><main><section className="hero"><h2>Modern E-Commerce Store</h2><p>React frontend connected to Spring Boot REST API.</p><div className="status">{status}</div></section><section className="grid">{products.map(p=><article className="card" key={p.id}><div className="pic">{p.imageUrl?<img src={p.imageUrl} alt={p.name}/>:p.name[0]}</div><h3>{p.name}</h3><p>{p.description}</p><strong>₹{Number(p.price).toLocaleString('en-IN')}</strong><button onClick={()=>add(p)}>Add to Cart</button></article>)}</section>{cart.length>0&&<aside className="cart"><h3>Your Cart</h3>{cart.map((p,i)=><div key={i}>{p.name} — ₹{Number(p.price).toLocaleString('en-IN')}</div>)}<b>Total: ₹{total.toLocaleString('en-IN')}</b></aside>}</main><footer>Spring Boot E-Commerce • Portfolio Project</footer></div>}
createRoot(document.getElementById('root')).render(<App/>);
