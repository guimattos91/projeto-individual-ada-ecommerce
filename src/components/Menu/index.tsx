import { Dispatch, SetStateAction } from 'react'

import { useProducts } from 'context/ProductContext'

import { Logo } from 'components/Logo'

import { strToSlug } from 'helpers'

import { ButtonUninstyled, LinkUnstylled } from 'styles/componentsStyle'

import {
  MenuBackground,
  MenuContainer,
  MenuMobile,
  MenuMobileNav,
} from './style'

interface IMenuProps {
  activateMenu: boolean
  setActivateMenu: Dispatch<SetStateAction<boolean>>
}

const Menu: React.FC<IMenuProps> = ({ activateMenu, setActivateMenu }) => {
  const { categories } = useProducts()

  return (
    <MenuBackground>
      <MenuContainer>
        <LinkUnstylled to="/">All Products</LinkUnstylled>
        {categories &&
          categories.map((category) => (
            <LinkUnstylled to={`/${strToSlug(category)}`}>
              {category}
            </LinkUnstylled>
          ))}
      </MenuContainer>
      {activateMenu && (
        <MenuMobile>
          <div className="d-flex justify-content-between mx-4">
            <Logo />
            <ButtonUninstyled
              onClick={() => setActivateMenu(false)}
              type="button"
            >
              x
            </ButtonUninstyled>
          </div>
          <MenuMobileNav>
            <LinkUnstylled to="/">All Products</LinkUnstylled>
            {categories &&
              categories.map((category) => (
                <LinkUnstylled to={`/${strToSlug(category)}`}>
                  {category}
                </LinkUnstylled>
              ))}
          </MenuMobileNav>
        </MenuMobile>
      )}
    </MenuBackground>
  )
}
export { Menu }
