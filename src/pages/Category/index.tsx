import { memo, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { useProducts } from 'context/ProductContext'

import Header from 'components/Header'
import { LoadingComponent } from 'components/LoadingComponent'
import { ProductList } from 'components/ProductList'

import useTitle from 'hooks/useTitle'

const Category: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('home.head-title')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {
    productCategories,
    isLoading,
    fetchProductCategories,
    setProductCategories,
  } = useProducts()
  const { category } = useParams()
  useEffect(() => {
    if (category) {
      fetchProductCategories(category)
    }
  }, [category, fetchProductCategories])

  console.log(category, productCategories)
  return (
    <>
      <Header />
      {isLoading && <LoadingComponent />}
      <ProductList products={productCategories} isLoading={isLoading} />
    </>
  )
}

export default memo(Category)
