import { Ratio } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import TextTruncate from 'react-text-truncate'

import { formatPrice, strToSlug } from 'helpers'

import { ButtonUninstyled } from 'styles/componentsStyle'

import { ProductType } from 'types/ProductType'

import { Card, CardBody, CardButton, PriceText, Rating } from './style'

interface IProductCardProps {
  product: ProductType
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const navigate = useNavigate()
  const handleNavigate = (): void => {
    navigate(
      `/${strToSlug(product.category)}/${strToSlug(product.title)}/${
        product.id
      }`,
    )
  }

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
        <ButtonUninstyled type="button" onClick={handleNavigate}>
          <TextTruncate
            line={1}
            element="h2"
            truncateText="…"
            text={product.title}
            containerClassName="fs-5"
          />
        </ButtonUninstyled>
        <Rating>
          <FaStar />
          <p>{product.rating.rate}/5</p>
        </Rating>
        <PriceText>${formatPrice(product.price)}</PriceText>
        <CardButton type="button" onClick={handleNavigate}>
          Comprar
        </CardButton>
      </CardBody>
    </Card>
  )
}
export { ProductCard }
