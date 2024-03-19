import { memo, useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import { useProducts } from 'context/ProductContext'

import { CategoryTitleComponent } from 'components/CategoryTitleComponent'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { LoadingComponent } from 'components/LoadingComponent'
import { ProductList } from 'components/ProductList'

import { capitalizeFirstLetters } from 'helpers'

import useTitle from 'hooks/useTitle'

const Category: React.FC = () => {
  const setTitle = useTitle()

  const {
    productCategories,
    isLoading,
    fetchProductCategories,
    products,
    fetchProducts,
  } = useProducts()
  const location = useLocation()
  const { state } = location
  const originalCategory = state?.original || 'Category Not Found'

  useEffect(() => {
    if (originalCategory) {
      fetchProductCategories(originalCategory)
    } else {
      fetchProducts()
    }
  }, [fetchProductCategories, originalCategory, fetchProducts])
  useEffect(() => {
    setTitle(String(capitalizeFirstLetters(originalCategory)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Header />
      <main>
        <CategoryTitleComponent
          title={capitalizeFirstLetters(originalCategory)}
        />
        {isLoading && <LoadingComponent />}
        {productCategories && (
          <ProductList products={productCategories} isLoading={isLoading} />
        )}
        {products && <ProductList products={products} isLoading={isLoading} />}
      </main>
      <Footer />
    </>
  )
}

export default memo(Category)