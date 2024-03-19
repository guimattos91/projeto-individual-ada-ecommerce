import { memo, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { useProducts } from 'context/ProductContext'

import { CategoryTitleComponent } from 'components/CategoryTitleComponent'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { LoadingComponent } from 'components/LoadingComponent'
import { ProductList } from 'components/ProductList'

import { capitalizeFirstLetters, strToSlug } from 'helpers'

import useTitle from 'hooks/useTitle'

const Category: React.FC = () => {
  const setTitle = useTitle()
  const { category } = useParams()
  const { isLoading, products, fetchProducts } = useProducts()

  const categoryProducts = products.filter(
    (categoryProduct) =>
      strToSlug(categoryProduct.category) === String(category),
  )
  const title = String(categoryProducts[0]?.category)
  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (title) {
      setTitle(capitalizeFirstLetters(title))
    }
  }, [setTitle, title])

  return (
    <>
      <Header />
      <main>
        <CategoryTitleComponent title={capitalizeFirstLetters(title)} />
        {isLoading && <LoadingComponent />}
        {categoryProducts && (
          <ProductList products={categoryProducts} isLoading={isLoading} />
        )}
      </main>
      <Footer />
    </>
  )
}

export default memo(Category)
