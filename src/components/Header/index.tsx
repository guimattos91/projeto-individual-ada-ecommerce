import { memo, useState } from 'react'

import { IoMenu } from 'react-icons/io5'

import { Logo } from 'components/Logo'
import { Menu } from 'components/Menu'

import { ButtonUninstyled } from 'styles/componentsStyle'

import { HeaderStyled } from './style'

const Header: React.FC = () => {
  const [activateMenu, setActivateMenu] = useState(false)

  const handleMenu = (): void => {
    setActivateMenu((prev) => !prev)
  }
  return (
    <>
      <HeaderStyled>
        <Logo />
        <ButtonUninstyled
          className="d-block d-md-none"
          type="button"
          onClick={handleMenu}
          aria-label="Menu Button"
        >
          <IoMenu />
        </ButtonUninstyled>
      </HeaderStyled>
      <Menu activateMenu={activateMenu} setActivateMenu={handleMenu} />
    </>
  )
}
export default memo(Header)
