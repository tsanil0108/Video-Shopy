import { useMemo, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Download,
  Infinity,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Zap
} from 'lucide-react'

import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import CartDrawer from '../components/CartDrawer'
import { PRODUCTS, STORE } from '../config'

export default function Home() {

  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  // Prevent duplicate products in cart
  const uniqueCart = useMemo(() => {
    return [
      ...new Map(
        cart.map((item) => [item.id, item])
      ).values()
    ]
  }, [cart])


  // =========================
  // ADD TO CART
  // =========================

  const add = (product) => {

    setCart((prev) => {

      const exists = prev.some(
        (item) => item.id === product.id
      )

      if (exists) {
        return prev
      }

      return [...prev, product]
    })

    setCartOpen(true)
  }


  // =========================
  // REMOVE FROM CART
  // =========================

  const remove = (productId) => {

    setCart((prev) =>
      prev.filter(
        (item) => item.id !== productId
      )
    )

  }


  // =========================
  // BUY NOW
  // =========================

  const buy = (product) => {

    // Save pending product before sending
    // customer to Razorpay

    localStorage.setItem(
      'videoshopy_pending_product',
      product.id
    )

    localStorage.setItem(
      'videoshopy_payment_started_at',
      String(Date.now())
    )

    // Also keep product information
    localStorage.setItem(
      'videoshopy_last_purchase',
      JSON.stringify(product)
    )

    // Open Razorpay Payment Link
    window.location.href =
      product.paymentLink
  }


  // =========================
  // CART CHECKOUT
  // =========================

  const checkout = () => {

    if (uniqueCart.length === 0) {
      return
    }

    // Frontend-only setup:
    // one product checkout at a time

    if (uniqueCart.length === 1) {

      buy(uniqueCart[0])

      return
    }

    alert(
      'Please purchase one bundle at a time.'
    )

  }


  return (

    <div id="top">

      {/* ================= HEADER ================= */}

      <Header
        cartCount={uniqueCart.length}
        onCart={() => setCartOpen(true)}
      />


      <main>

        {/* ================= HERO ================= */}

        <section className="hero">

          <div className="hero-grid"></div>

          <div className="hero-glow one"></div>

          <div className="hero-glow two"></div>


          <div className="container hero-inner">


            <div className="hero-copy">

              <div className="eyebrow">

                <Sparkles size={16} />

                India's creator-ready video store

              </div>


              <h1>

                Viral content.

                <br />

                <span>
                  Ready to post.
                </span>

              </h1>


              <p>

                Premium reel bundles for creators,
                theme pages and businesses.

                Download once, post every day
                and grow faster.

              </p>


              <div className="hero-actions">

                <a
                  className="btn btn-primary btn-lg"
                  href="#bundles"
                >

                  <Zap size={19} />

                  Explore Bundles

                </a>


                <a
                  className="btn btn-glass btn-lg"
                  href="#how"
                >

                  <Play size={18} />

                  How it works

                </a>

              </div>


              <div className="trust-line">

                <span>

                  <ShieldCheck />

                  Secure Payment

                </span>


                <span>

                  <Download />

                  Instant Access

                </span>


                <span>

                  <Infinity />

                  Lifetime Use

                </span>

              </div>

            </div>


            {/* HERO VISUAL */}

            <div className="hero-showcase">


              <div className="phone-card back">

                <div className="fake-reel gym">

                  WORK
                  <br />
                  HARDER

                </div>

              </div>


              <div className="phone-card middle">

                <div className="fake-reel anime">

                  ANIME
                  <br />
                  POWER

                </div>

              </div>


              <div className="phone-card front">

                <div className="fake-reel health">

                  LEVEL
                  <br />
                  UP

                </div>


                <span className="floating-pill">

                  <Star
                    size={15}
                    fill="currentColor"
                  />

                  15K+ Reels

                </span>

              </div>


            </div>


          </div>

        </section>


        {/* ================= STATS ================= */}

        <section className="stats">

          <div className="container stats-grid">

            <div>

              <b>23K+</b>

              <span>
                Ready-to-post videos
              </span>

            </div>


            <div>

              <b>100%</b>

              <span>
                Digital delivery
              </span>

            </div>


            <div>

              <b>HD</b>

              <span>
                Mobile-ready quality
              </span>

            </div>


            <div>

              <b>24×7</b>

              <span>
                Instant purchase access
              </span>

            </div>

          </div>

        </section>


        {/* ================= PRODUCTS ================= */}

        <section
          className="section"
          id="bundles"
        >

          <div className="container">


            <div className="section-head">

              <div>

                <span className="section-kicker">
                  HOT RIGHT NOW
                </span>

                <h2>
                  Pick your viral bundle
                </h2>

              </div>


              <p>

                One-time payment.

                No subscription.

                Start posting today.

              </p>

            </div>


            <div className="products-grid">

              {PRODUCTS.map((product) => (

                <ProductCard

                  key={product.id}

                  product={product}

                  onAdd={add}

                  onBuy={buy}

                />

              ))}

            </div>


          </div>

        </section>


        {/* ================= HOW IT WORKS ================= */}

        <section
          className="section steps-section"
          id="how"
        >

          <div className="container">


            <div className="center-head">

              <span className="section-kicker">
                SUPER SIMPLE
              </span>

              <h2>
                From payment to posting in minutes
              </h2>

            </div>


            <div className="steps">


              <div className="step">

                <span>01</span>

                <div>
                  <Zap />
                </div>

                <h3>
                  Choose Bundle
                </h3>

                <p>
                  Select the content pack
                  that matches your page.
                </p>

              </div>


              <i></i>


              <div className="step">

                <span>02</span>

                <div>
                  <ShieldCheck />
                </div>

                <h3>
                  Pay Securely
                </h3>

                <p>
                  Complete your payment
                  through Razorpay.
                </p>

              </div>


              <i></i>


              <div className="step">

                <span>03</span>

                <div>
                  <Download />
                </div>

                <h3>
                  Download & Post
                </h3>

                <p>
                  Open your access link
                  and download the bundle.
                </p>

              </div>


            </div>


          </div>

        </section>


        {/* ================= WHY VIDEOSHOPY ================= */}

        <section
          className="section"
          id="why"
        >

          <div className="container">


            <div className="why-card">


              <div>

                <span className="section-kicker">
                  BUILT FOR CREATORS
                </span>


                <h2>

                  Stop searching.

                  <br />

                  Start posting.

                </h2>


                <p>

                  VideoShopy keeps content
                  creation simple with organized,
                  ready-to-use digital bundles.

                </p>


                <a
                  href="#bundles"
                  className="btn btn-primary"
                >

                  Get a Bundle

                  <ArrowRight size={18} />

                </a>

              </div>


              <div className="benefits">


                <div>

                  <BadgeCheck />

                  <span>

                    <b>
                      Curated Content
                    </b>

                    <small>
                      Organized bundles,
                      not random clutter.
                    </small>

                  </span>

                </div>


                <div>

                  <Zap />

                  <span>

                    <b>
                      Fast Delivery
                    </b>

                    <small>
                      Get access immediately
                      after purchase.
                    </small>

                  </span>

                </div>


                <div>

                  <Infinity />

                  <span>

                    <b>
                      Lifetime Access
                    </b>

                    <small>
                      Keep the files
                      and reuse anytime.
                    </small>

                  </span>

                </div>


                <div>

                  <Star />

                  <span>

                    <b>
                      Creator Focused
                    </b>

                    <small>
                      Built for Reels,
                      Shorts and theme pages.
                    </small>

                  </span>

                </div>


              </div>


            </div>


          </div>

        </section>


        {/* ================= FAQ ================= */}

        <section
          className="section faq"
          id="faq"
        >

          <div className="container">


            <div className="center-head">

              <span className="section-kicker">
                FAQ
              </span>

              <h2>
                Before you buy
              </h2>

            </div>


            <details open>

              <summary>
                How do I receive my files?
              </summary>

              <p>

                After successful payment,
                you will receive access to
                your purchased bundle.

              </p>

            </details>


            <details>

              <summary>
                Is VideoShopy backend-free?
              </summary>

              <p>

                Yes. VideoShopy currently
                works using React + Vite
                frontend only.

              </p>

            </details>


            <details>

              <summary>
                Can I add more products?
              </summary>

              <p>

                Yes. Simply add another
                product inside src/config.js.

              </p>

            </details>


            <details>

              <summary>
                Can this be deployed on Vercel?
              </summary>

              <p>

                Yes. The project is
                Vercel-ready.

              </p>

            </details>


          </div>

        </section>


      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="container footer-inner">

          <a
            href="#top"
            className="brand"
          >

            Video<span>Shopy</span>

          </a>


          <p>
            Premium digital video bundles
            for modern creators.
          </p>


          <div>
            © 2026 {STORE.name}.
            All rights reserved.
          </div>

        </div>

      </footer>


      {/* ================= CART ================= */}

      <CartDrawer

        open={cartOpen}

        items={uniqueCart}

        onClose={() => setCartOpen(false)}

        onRemove={remove}

        onCheckout={checkout}

      />


    </div>

  )
}