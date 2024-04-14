import { useState } from 'react'

import { Ratio, Row, Col, Container } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'

import { capitalizeFirstLetters, formatPrice, strToSlug } from 'helpers'

import { ButtonUninstyled, Line, LinkUnstylled } from 'styles/componentsStyle'

import { ProductType } from 'types/ProductType'

import {
  Breadcrumbs,
  DescriptionDiv,
  Price,
  QuantityControlDiv,
  Rating,
} from './styled'

interface IProductTypeProps {
  product: ProductType
  addToCart: (productQuantity: number) => void
}

const ProductDetails: React.FC<IProductTypeProps> = ({
  product,
  addToCart,
}) => {
  const [productQuantity, setProductQuantity] = useState(0)
  const handleAddition = (): void => {
    setProductQuantity((prev) => prev + 1)
  }
  const handleSubtraction = (): void => {
    if (productQuantity > 0) {
      setProductQuantity((prev) => prev - 1)
    }
  }

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
              <LinkUnstylled to={`/categories/${strToSlug(product.category)}`}>
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
          <QuantityControlDiv className="d-flex g-3">
            <ButtonUninstyled
              type="button"
              className="me-3"
              onClick={handleSubtraction}
            >
              -
            </ButtonUninstyled>
            <p>{productQuantity}</p>

            <ButtonUninstyled
              type="button"
              className="ms-3"
              onClick={handleAddition}
            >
              +
            </ButtonUninstyled>
          </QuantityControlDiv>

          <ButtonUninstyled
            type="button"
            className="ms-3"
            onClick={() => addToCart(productQuantity)}
          >
            Add To Cart
          </ButtonUninstyled>
        </Col>
      </Row>
      <DescriptionDiv>
        <h3 className="me-2">Description</h3>
        <Line />
      </DescriptionDiv>
      <Row>
        <Col>
          <p className="mb-3">{product.description}</p>
        </Col>
      </Row>
    </Container>
  )
}
export { ProductDetails }
