import { memo } from 'react'

import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

import { useProducts } from 'context/ProductContext'

import { Logo } from 'components/Logo'

import { capitalizeFirstLetters, strToSlug } from 'helpers'

import { ButtonUninstyled, LinkUnstylled } from 'styles/componentsStyle'

import { FooterStyled, Signature } from './style'

const Footer: React.FC = () => {
  const { categories } = useProducts()
  const navigate = useNavigate()

  const handleNavigate = (category: string): void => {
    navigate(`/${strToSlug(category)}`, {
      state: { original: `${category}` },
    })
  }
  return (
    <div className="d-flex flex-column">
      <FooterStyled>
        <Logo />
        <nav className="d-flex flex-column">
          {categories &&
            categories.map((category) => (
              <ButtonUninstyled
                key={category}
                onClick={() => handleNavigate(category)}
              >
                {capitalizeFirstLetters(category)}
              </ButtonUninstyled>
            ))}
        </nav>
        <div className="d-flex">
          <LinkUnstylled
            to="https://www.facebook.com/"
            target="_blank"
            className="me-3"
          >
            <IoLogoFacebook />
          </LinkUnstylled>
          <LinkUnstylled
            to="https://www.instagram.com/"
            target="_blank"
            className="me-3"
          >
            <IoLogoInstagram />
          </LinkUnstylled>
          <LinkUnstylled to="https://www.twitter.com/" target="_blank">
            <IoLogoTwitter />
          </LinkUnstylled>
        </div>
      </FooterStyled>
      <Signature>
        Site made by:&nbsp;
        <LinkUnstylled
          to="https://www.facebook.com/"
          target="_blank"
          className="me-3"
        >
          Guilherme Mattos
        </LinkUnstylled>
      </Signature>
    </div>
  )
}
export default memo(Footer)
