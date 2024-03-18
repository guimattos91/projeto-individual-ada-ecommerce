import { Spinner } from 'react-bootstrap'

import { LoadingContainer } from './style'

const LoadingComponent: React.FC = () => {
  return (
    <LoadingContainer>
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
    </LoadingContainer>
  )
}
export { LoadingComponent }
