import { Container } from 'react-bootstrap'

import { Line } from 'styles/componentsStyle'

import { Title } from './style'

interface ITitleComponent {
  title: string
}
const CategoryTitleComponent: React.FC<ITitleComponent> = ({ title }) => {
  return (
    <Container className="d-flex align-items-center">
      <Title>{title}</Title> <Line />
    </Container>
  )
}
export { CategoryTitleComponent }
