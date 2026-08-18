import { ShoppingCart, Sparkles } from 'lucide-react'

export default function Header({ cartCount, onCart }) {
  return (
    <header className="header">
      <div className="container nav">
        <a href="#top" className="brand"><span className="brand-mark"><Sparkles size={18}/></span>Video<span>Shopy</span></a>
        <nav className="nav-links">
          <a href="#bundles">Bundles</a>
          <a href="#why">Why Us</a>
          <a href="#faq">FAQ</a>
        </nav>
        <button className="cart-button" onClick={onCart} aria-label="Open cart">
          <ShoppingCart size={19}/><span>Cart</span>{cartCount > 0 && <b>{cartCount}</b>}
        </button>
      </div>
    </header>
  )
}
