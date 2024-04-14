import { Dispatch, SetStateAction } from 'react'

import { IoMdClose } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

import { useProducts } from 'context/ProductContext'

import { Logo } from 'components/Logo'

import { capitalizeFirstLetters, strToSlug } from 'helpers'

import { ButtonUninstyled, LinkUnstylled } from 'styles/componentsStyle'

import {
  MenuBackground,
  MenuButton,
  MenuContainer,
  MenuMobile,
  MenuMobileBackground,
  MenuMobileNav,
} from './style'

interface IMenuProps {
  activateMenu: boolean
  setActivateMenu: Dispatch<SetStateAction<boolean>>
}

const Menu: React.FC<IMenuProps> = ({ activateMenu, setActivateMenu }) => {
  const { categories } = useProducts()
  const navigate = useNavigate()
  const handleNavigate = (category: string): void => {
    navigate(`/categories/${strToSlug(category)}`, {
      state: { original: `${category}` },
    })
  }
  return (
    <MenuBackground>
      <MenuContainer>
        <MenuButton type="button" onClick={() => navigate('all-products')}>
          All Products
        </MenuButton>
        {categories &&
          categories.map((category) => (
            <MenuButton
              type="button"
              key={category}
              onClick={() => handleNavigate(category)}
            >
              {capitalizeFirstLetters(category)}
            </MenuButton>
          ))}
      </MenuContainer>
      {activateMenu && (
        <MenuMobileBackground
          onClick={() => {
            setActivateMenu(false)
          }}
        >
          <MenuMobile>
            <div className="d-flex justify-content-between mx-4">
              <Logo />
              <ButtonUninstyled
                onClick={() => setActivateMenu(false)}
                type="button"
              >
                <IoMdClose />
              </ButtonUninstyled>
            </div>
            <MenuMobileNav>
              <LinkUnstylled
                to="/all-products"
                onClick={() => {
                  setActivateMenu(false)
                }}
              >
                All Products
              </LinkUnstylled>
              {categories &&
                categories.map((category) => (
                  <ButtonUninstyled
                    key={category}
                    onClick={() => {
                      handleNavigate(category)
                      setActivateMenu(false)
                    }}
                  >
                    {capitalizeFirstLetters(category)}
                  </ButtonUninstyled>
                ))}
            </MenuMobileNav>
          </MenuMobile>
        </MenuMobileBackground>
      )}
    </MenuBackground>
  )
}
export { Menu }
