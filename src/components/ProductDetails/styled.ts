import styled from 'styled-components'

export const Price = styled.h2`
  color: var(--color-primary);
`
export const DescriptionDiv = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-primary);
  margin-top: 2rem;
`
export const QuantityControlDiv = styled.div`
  padding: 0 1rem;
  background-color: var(--color-primary);
  color: var(--color-white);
`
export const Rating = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-primary);
  p {
    margin-left: 0.25rem;
  }
`
export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: var(--color-gray);
  @media (max-width: 576px) {
    margin-top: 2rem;
  }
`
