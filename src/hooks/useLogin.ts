import { FormEvent, useCallback, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useClients } from 'context/UserContext'

interface LoginData {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  senha: string
  setSenha: React.Dispatch<React.SetStateAction<string>>
  error: string
  handleLogin: (event: FormEvent<HTMLFormElement>, page?: string) => void
}

const useLogin = (): LoginData => {
  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const [error, setError] = useState<string>('') // Estado para armazenar erros
  const navigate = useNavigate()
  const { users } = useClients()
  const userLoggingIn = users?.find((usuario) => usuario.email === email)

  const handleLogin = useCallback(
    async (event: FormEvent<HTMLFormElement>, page = '') => {
      event.preventDefault()
      setError('')
      if (!userLoggingIn) {
        setError('email not registered')
        return
      }

      if (userLoggingIn?.senha !== senha) {
        setError('Wrong Password')
        return
      }

      localStorage.setItem('userData', JSON.stringify(userLoggingIn))
      navigate(`/${page}`)
    },
    [navigate, senha, userLoggingIn],
  )

  return { email, setEmail, senha, setSenha, error, handleLogin }
}

export default useLogin
