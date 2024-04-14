import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { UserType } from 'types/UserType'

interface IContextProps {
  user: UserType | null
  users: UserType[] | null
  error: string | null
  isLoading: boolean
  fetchUsers: () => Promise<void>
  fetchUser: (id: string) => Promise<void>
}

interface IClientProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const ClientProvider: React.FC<IClientProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null)
  const [users, setUsers] = useState<UserType[] | null>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchUsers = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/`)
      setUsers(data)
    } catch {
      setError('Erro: Cadastro não encontrado!')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchUser = useCallback(async (id: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const { data } = await Api.get(`/${id}`)
      setUser(data)
    } catch {
      setError('Erro: Cadastro não encontrado!')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          user,
          users,
          error,
          isLoading,
          fetchUser,
          fetchUsers,
        }),
        [user, users, error, fetchUser, fetchUsers, isLoading],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useClients = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useClients must be within ClientProvider')
  }

  return context
}
