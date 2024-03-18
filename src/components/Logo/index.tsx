import { AiFillShop } from 'react-icons/ai'

import { LinkUnstylled } from 'styles/componentsStyle'

const Logo: React.FC = () => {
  return (
    <LinkUnstylled to="/" className="d-flex align-items-center">
      <AiFillShop size={30} />
      <h1 className="m-0 p-0">ChopShop</h1>
    </LinkUnstylled>
  )
}
export { Logo }
