import styled from 'styled-components'

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-primary);
  color: white;
  padding: 2rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    column-gap: 2rem;
    text-align: center;
  }
`
export const Signature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-terciary);
  color: white;
  a {
    font-weight: 700;
  }
`
