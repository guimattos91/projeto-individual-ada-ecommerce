import { Ratio } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import TextTruncate from 'react-text-truncate'

import { formatPrice, strToSlug } from 'helpers'

import { LinkButton } from 'styles/componentsStyle'

import { ProductType } from 'types/ProductType'

import { Card, CardBody, PriceText, Rating } from './style'

interface IProductCardProps {
  product: ProductType
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
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
        }}
      >
        <div />
      </Ratio>
      <CardBody>
        <TextTruncate
          line={1}
          element="h2"
          truncateText="…"
          text={product.title}
          containerClassName="fs-5"
        />
        <Rating>
          <FaStar />
          <p>{product.rating.rate}/5</p>
        </Rating>
        <PriceText>${formatPrice(product.price)}</PriceText>
        <LinkButton
          className="stretched-link"
          to={`/${strToSlug(product.category)}/${strToSlug(product.title)}/${
            product.id
          }`}
        >
          Comprar
        </LinkButton>
      </CardBody>
    </Card>
  )
}
export { ProductCard }
