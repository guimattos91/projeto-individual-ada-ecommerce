import { memo, useEffect } from 'react'

import { useProducts } from 'context/ProductContext'

import { BestProductsList } from 'components/BestProductsList'
import { CategoryTitleComponent } from 'components/CategoryTitleComponent'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { LoadingComponent } from 'components/LoadingComponent'

import useTitle from 'hooks/useTitle'

const Home: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('home.head-title')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { products, isLoading, fetchProducts } = useProducts()
  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Header />
      <main>
        {isLoading && <LoadingComponent />}
        <CategoryTitleComponent title="Best Rated" />

        <BestProductsList products={products} isLoading={isLoading} />
      </main>
      <Footer />
    </>
  )
}

export default memo(Home)
