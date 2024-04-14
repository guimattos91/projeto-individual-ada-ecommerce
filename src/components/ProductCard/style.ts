import TextTruncate from 'react-text-truncate'
import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border-radius: 1rem;
  background-color: white;
`
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-primary);
  padding: 0.5rem;
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  p {
    margin-left: 0.25rem;
  }
`
export const CardButton = styled.button`
  border: none;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  background: var(--color-primary);
  padding: 0.25rem 1.5rem;
  color: var(--color-white);
  border-radius: 3rem;
  &:hover {
    background-color: #a77ae4;
  }
`

export const CardTitle = styled(TextTruncate)`
  font-size: 1.5rem;
`

export const PriceText = styled.p`
  font-weight: 500;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  font-size: larger;
`
