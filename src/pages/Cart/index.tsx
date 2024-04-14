import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { useProducts } from 'context/ProductContext'

import { CategoryTitleComponent } from 'components/CategoryTitleComponent'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { ProductCheckout } from 'components/ProductCheckout'

import useTitle from 'hooks/useTitle'

const Cart: React.FC = () => {
  const setTitle = useTitle()
  const { cart, isLoading } = useProducts()
  useEffect(() => {
    setTitle('Cart')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <main>
        <CategoryTitleComponent title="Cart" />

        <Container>
          <Row>
            {!isLoading &&
              cart &&
              cart.map((product) => (
                <Col className="d-flex p-2" key={product.id} xs={12}>
                  <ProductCheckout product={product} />
                </Col>
              ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default memo(Cart)
