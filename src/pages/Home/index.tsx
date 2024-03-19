import { memo, useEffect } from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { useProducts } from 'context/ProductContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import { LoadingComponent } from 'components/LoadingComponent'
import { ProductCard } from 'components/ProductCard'

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
        <Container>
          <Row>
            {!isLoading &&
              products.map((product) => (
                <Col
                  className="d-flex p-2"
                  key={product.id}
                  xs={12}
                  md={4}
                  lg={3}
                >
                  <ProductCard product={product} />
                </Col>
              ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default memo(Home)
