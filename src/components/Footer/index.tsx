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
        <nav className="d-flex flex-column  my-3 my-md-0">
          {categories &&
            categories.map((category) => (
              <ButtonUninstyled
                key={category}
                onClick={() => handleNavigate(category)}
                className="text-center"
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
            aria-label="Link that sends to the Facebook Website"
          >
            <IoLogoFacebook />
          </LinkUnstylled>
          <LinkUnstylled
            to="https://www.instagram.com/"
            target="_blank"
            className="me-3"
            aria-label="Link that sends to the Intagram Website"
          >
            <IoLogoInstagram />
          </LinkUnstylled>
          <LinkUnstylled
            to="https://www.twitter.com/"
            target="_blank"
            aria-label="Link that sends to the Twitter Website"
          >
            <IoLogoTwitter />
          </LinkUnstylled>
        </div>
      </FooterStyled>
      <Signature>
        Made by:&nbsp;
        <LinkUnstylled
          to="https://www.linkedin.com/in/guimattos91/"
          target="_blank"
          className="me-3"
          aria-label="Link that sends to the Linkedin of the creator of this Website"
        >
          Guilherme Mattos
        </LinkUnstylled>
      </Signature>
    </div>
  )
}
export default memo(Footer)
