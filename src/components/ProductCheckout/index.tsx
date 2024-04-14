import { Ratio } from 'react-bootstrap'

import { formatPrice, strToSlug } from 'helpers'

import { LinkUnstylled } from 'styles/componentsStyle'

import { ProductType } from 'types/ProductType'

import { BodyContainer, Card, PriceContainer, PriceText } from './style'

interface IProductCardProps {
  product: ProductType
}

const ProductCheckout: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <Card className="shadow">
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
          maxHeight: '80px',
          maxWidth: '80px',
        }}
      >
        <div />
      </Ratio>
      <LinkUnstylled
        to={`/${strToSlug(product.category)}/${strToSlug(product.title)}/${
          product.id
        }`}
      >
        <BodyContainer>
          <h3>{product.title}</h3>
          <p>Quantity: {product.quantity}</p>
        </BodyContainer>
      </LinkUnstylled>

      <PriceContainer>
        <PriceText>${formatPrice(product.price * product.quantity)}</PriceText>
      </PriceContainer>
    </Card>
  )
}
export { ProductCheckout }
