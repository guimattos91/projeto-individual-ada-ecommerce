import { Ratio, Row, Col, Container } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'

import { capitalizeFirstLetters, formatPrice, strToSlug } from 'helpers'

import { Line, LinkUnstylled } from 'styles/componentsStyle'

import { ProductType } from 'types/ProductType'

import { Breadcrumbs, DescriptionDiv, Price, Rating } from './styled'

interface IProductTypeProps {
  product: ProductType
}

const ProductDetails: React.FC<IProductTypeProps> = ({ product }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6}>
          <Ratio
            aspectRatio="1x1"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundColor: 'white',
              borderTopLeftRadius: '1rem',
              borderTopRightRadius: '1rem',
            }}
          >
            <div />
          </Ratio>
        </Col>
        <Col xs={12} sm={6}>
          <Breadcrumbs>
            <p>
              <LinkUnstylled to="/"> home&nbsp;</LinkUnstylled>
              <LinkUnstylled to={`/${strToSlug(product.category)}`}>
                &nbsp;/&nbsp;{capitalizeFirstLetters(product.category)}
              </LinkUnstylled>
              &nbsp;/&nbsp;{product.title}
            </p>
          </Breadcrumbs>
          <h1 className="mt-3">{product.title}</h1>
          <Rating>
            <FaStar />
            <p>
              {product.rating.rate}/5
              <span className="text-black ms-3">
                {product.rating.count} ratings
              </span>
            </p>
          </Rating>
          <Line />

          <Price>${formatPrice(product.price)}</Price>
        </Col>
      </Row>
      <DescriptionDiv>
        <h3 className="me-2">Description</h3>
        <Line />
      </DescriptionDiv>
      <Row>
        <Col>
          <p>{product.description}</p>
        </Col>
      </Row>
    </Container>
  )
}
export { ProductDetails }
