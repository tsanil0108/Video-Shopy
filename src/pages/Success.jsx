import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  CheckCircle2,
  Download,
  Home,
  ShieldAlert
} from 'lucide-react'

import { PRODUCTS } from '../config'

export default function Success() {

  const [searchParams] = useSearchParams()

  const product = useMemo(() => {

    // First try product ID coming from URL
    const productFromUrl =
      searchParams.get('product')

    // Otherwise get product saved before Razorpay
    const pendingProduct =
      localStorage.getItem(
        'videoshopy_pending_product'
      )

    const productId =
      productFromUrl || pendingProduct

    return (
      PRODUCTS.find(
        (item) => item.id === productId
      ) || null
    )

  }, [searchParams])


  const openDownload = () => {

    if (!product?.driveLink) {
      return
    }

    // Remove temporary purchase data
    localStorage.removeItem(
      'videoshopy_pending_product'
    )

    localStorage.removeItem(
      'videoshopy_payment_started_at'
    )

    // Open Google Drive
    window.open(
      product.driveLink,
      '_blank',
      'noopener,noreferrer'
    )
  }


  return (

    <main className="success-page">

      <div className="success-card">

        <div className="success-icon">
          <CheckCircle2 size={42} />
        </div>


        <span className="section-kicker">
          PAYMENT COMPLETE
        </span>


        <h1>
          Your Bundle is Ready 🎉
        </h1>


        {product ? (

          <>

            <p>
              Thank you for purchasing{' '}
              <strong>
                {product.title}
              </strong>
            </p>


            <div
              style={{
                padding: '20px',
                margin: '25px 0',
                borderRadius: '16px',
                background:
                  'rgba(255,255,255,0.05)'
              }}
            >

              <div
                style={{
                  fontSize: '40px',
                  marginBottom: '10px'
                }}
              >
                {product.emoji}
              </div>


              <h3>
                {product.shortTitle}
              </h3>


              <p
                style={{
                  opacity: 0.7,
                  marginTop: '6px'
                }}
              >
                Lifetime Access
              </p>

            </div>


            <button
              className="btn btn-primary btn-lg full"
              onClick={openDownload}
            >

              <Download size={19} />

              Download from Google Drive

            </button>


            <p
              style={{
                fontSize: '13px',
                opacity: 0.6,
                marginTop: '15px'
              }}
            >
              Your content will open in Google Drive.
            </p>

          </>

        ) : (

          <div className="warning">

            <ShieldAlert />

            <div>
              <strong>
                Product not found
              </strong>

              <p>
                We could not identify the bundle
                associated with this purchase.
              </p>
            </div>

          </div>

        )}


        <Link
          to="/"
          className="back-home"
        >

          <Home size={17} />

          Back to VideoShopy

        </Link>

      </div>

    </main>

  )
}