import { X, Trash2, CreditCard, ShieldCheck } from 'lucide-react'

export default function CartDrawer({ open, items, onClose, onRemove, onCheckout }) {
  const total = items.reduce((s, p) => s + p.price, 0)
  return (
    <>
      <div className={`overlay ${open ? 'show' : ''}`} onClick={onClose}></div>
      <aside className={`cart-drawer ${open ? 'open' : ''}`}>
        <div className="cart-head"><div><span>Your Cart</span><h3>{items.length} Digital Bundle{items.length !== 1 ? 's' : ''}</h3></div><button onClick={onClose}><X/></button></div>
        <div className="cart-items">
          {items.length === 0 ? <div className="empty-cart">Your cart is empty.<small>Add a viral bundle and start growing.</small></div> : items.map(item => (
            <div className="cart-item" key={item.id}>
              <div className={`cart-thumb accent-${item.accent}`}>{item.emoji}</div>
              <div><b>{item.shortTitle}</b><small>Instant digital access</small><strong>₹{item.price}</strong></div>
              <button onClick={() => onRemove(item.id)}><Trash2 size={17}/></button>
            </div>
          ))}
        </div>
        <div className="cart-footer">
          <div className="total"><span>Total</span><strong>₹{total}</strong></div>
          <p><ShieldCheck size={16}/>Secure payment via Razorpay</p>
          <button className="btn btn-primary checkout" disabled={!items.length} onClick={onCheckout}><CreditCard size={18}/>Proceed to Pay ₹{total}</button>
          <small className="cart-note">Frontend-only demo: for multiple items, configure one combined Razorpay Payment Link or sell bundles individually.</small>
        </div>
      </aside>
    </>
  )
}
