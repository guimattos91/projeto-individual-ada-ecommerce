import { memo, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { useProducts } from 'context/ProductContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import { LoadingComponent } from 'components/LoadingComponent'
import { ProductDetails } from 'components/ProductDetails'

import useTitle from 'hooks/useTitle'

const Product: React.FC = () => {
  const setTitle = useTitle()
  const { id } = useParams()

  useEffect(() => {
    setTitle('home.head-title')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { product, isLoading, fetchProduct, addToCart } = useProducts()
  useEffect(() => {
    fetchProduct(Number(id))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Header />
      <main>
        {isLoading && <LoadingComponent />}
        {product && <ProductDetails product={product} addToCart={addToCart} />}
      </main>
      <Footer />
    </>
  )
}

export default memo(Product)
