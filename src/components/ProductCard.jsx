import { Check, ShoppingBag, Zap } from 'lucide-react'

export default function ProductCard({ product, onAdd, onBuy }) {
  const discount = Math.round((1 - product.price / product.oldPrice) * 100)
  return (
    <article className={`product-card accent-${product.accent}`}>
      <div className="product-visual">
        <span className="badge">{product.badge}</span>
        <div className="visual-orb">{product.emoji}</div>
        <div className="reel-stack"><i></i><i></i><i></i></div>
        <div className="visual-copy"><b>VIRAL</b><span>REELS</span></div>
      </div>
      <div className="product-body">
        <span className="category">{product.category}</span>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="feature-row">
          {product.features.slice(0, 3).map(f => <span key={f}><Check size={14}/>{f}</span>)}
        </div>
        <div className="price-line">
          <strong>₹{product.price}</strong><del>₹{product.oldPrice}</del><em>{discount}% OFF</em>
        </div>
        <div className="card-actions">
          <button className="btn btn-soft" onClick={() => onAdd(product)}><ShoppingBag size={17}/>Add to Cart</button>
          <button className="btn btn-primary" onClick={() => onBuy(product)}><Zap size={17}/>Buy Now</button>
        </div>
      </div>
    </article>
  )
}
