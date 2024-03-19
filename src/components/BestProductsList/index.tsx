import { Col, Container, Row } from 'react-bootstrap'

import { ProductCard } from 'components/ProductCard'

import { ProductType } from 'types/ProductType'

interface IProductListProps {
  products: ProductType[]
  isLoading: boolean
}

const BestProductsList: React.FC<IProductListProps> = ({
  products,
  isLoading,
}) => {
  const betterProducts = products.filter(
    (oneProduct) => oneProduct.rating.rate > 4.5,
  )
  return (
    <Container>
      <Row>
        {!isLoading &&
          betterProducts.map((product) => (
            <Col className="d-flex p-2" key={product.id} xs={12} md={4} lg={3}>
              <ProductCard product={product} />
            </Col>
          ))}
      </Row>
    </Container>
  )
}
export { BestProductsList }
