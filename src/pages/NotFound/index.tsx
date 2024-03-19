import { memo, useEffect } from 'react'

import { MdDoNotDisturbOn } from 'react-icons/md'

import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { LinkButton } from 'styles/componentsStyle'

import { Main } from './style'

const NotFound: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Ops...')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Main>
        <MdDoNotDisturbOn size={70} />
        <h1>It seems you&apos;re lost...</h1>
        <p className="mb-2">Click the button below to return</p>
        <LinkButton to="/">Home</LinkButton>
      </Main>
      <Footer />
    </>
  )
}

export default memo(NotFound)
