import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  border-radius: 1rem;
  background-color: white;
  padding: 2rem;
`
export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-primary);
  margin-left: 3rem;
`
export const PriceContainer = styled.div`
  display: flex;
  color: var(--color-primary);
  margin-left: auto;
`

export const PriceText = styled.p`
  font-weight: 500;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  font-size: larger;
`
