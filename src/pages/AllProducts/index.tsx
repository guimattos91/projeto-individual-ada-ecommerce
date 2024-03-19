import { memo, useEffect } from 'react'

import { useProducts } from 'context/ProductContext'

import { CategoryTitleComponent } from 'components/CategoryTitleComponent'
import Header from 'components/Header'
import { LoadingComponent } from 'components/LoadingComponent'
import { ProductList } from 'components/ProductList'

import useTitle from 'hooks/useTitle'

const CategoryAllProducts: React.FC = () => {
  const setTitle = useTitle()

  const { isLoading, products, fetchProducts } = useProducts()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])
  useEffect(() => {
    setTitle('All Products')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Header />
      <CategoryTitleComponent title="All Products" />
      {isLoading && <LoadingComponent />}

      {products && <ProductList products={products} isLoading={isLoading} />}
    </>
  )
}

export default memo(CategoryAllProducts)
