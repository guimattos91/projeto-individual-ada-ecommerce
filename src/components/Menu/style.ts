import { Container } from 'react-bootstrap'
import styled from 'styled-components'

export const MenuBackground = styled.div`
  background-color: var(--color-primary);
  color: var(--color-white);
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
`
export const MenuContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-primary);
  color: var(--color-white);

  @media (max-width: 767px) {
    display: none;
  }
`
export const MenuMobile = styled.div`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  height: 100vh;
  width: 80%;
  z-index: 3;
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 2rem 0 0 0;

  @media (max-width: 768px) {
    display: block;
  }
`

export const MenuMobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  margin-top: 3rem;
  font-size: 1.5rem;
  gap: 0.5rem;
  background-color: var(--color-primary);
  color: var(--color-white);
`
