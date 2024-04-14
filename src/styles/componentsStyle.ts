import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkButton = styled(Link)`
  border: none;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  background: var(--color-primary);
  padding: 0.25rem 1.5rem;
  color: var(--color-white);
  border-radius: 3rem;
  :hover {
    background: #7e56b4;
  }
`
export const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: var(--color-primary);
  margin: 1rem 0;
  font-size: smaller;
`

export const LinkUnstylled = styled(Link)`
  border: none;
  text-decoration: none;
  background: none;
  color: inherit;
`
export const ButtonUninstyled = styled.button`
  border: none;
  text-decoration: none;
  text-align: start;
  background: none;
  color: inherit;
`
