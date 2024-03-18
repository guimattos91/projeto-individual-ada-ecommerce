import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

import { ProductType } from 'types/ProductType'

interface IContextProps {
  product: ProductType | null
  products: ProductType[]
  categories: string[]
  productCategories: ProductType[]
  isLoading: boolean
  error: string | null
  fetchProduct: (id: number) => void
  fetchProducts: () => void
  fetchProductCategories: (category: string) => void
  setProductCategories: Dispatch<SetStateAction<ProductType[]>>
}

interface IProductProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const ProductProvider: React.FC<IProductProviderProps> = ({
  children,
}) => {
  const [product, setProduct] = useState<ProductType | null>(null)
  const [products, setProducts] = useState<ProductType[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [productCategories, setProductCategories] = useState<ProductType[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchProducts = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get('/')
      setProducts(data)
    } catch {
      setError('Erro: Produtos não encontrados')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchProduct = useCallback(async (id: number) => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`${id}`)
      setProduct(data)
    } catch {
      setError('Erro: Produto não encontrado')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchCategories = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`categories/`)
      setCategories(data)
    } catch {
      setError('Erro: Categoria Não encontrada')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchProductCategories = useCallback(async (category: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const { data } = await Api.get(`/category/${category}`)
      setProductCategories(data)
    } catch {
      setError('Erro: Categoria Não encontrada')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCategories()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          product,
          products,
          categories,
          productCategories,
          isLoading,
          error,
          fetchProduct,
          fetchProducts,
          fetchProductCategories,
          setProductCategories,
        }),
        [
          product,
          products,
          isLoading,
          error,
          categories,
          productCategories,
          fetchProduct,
          fetchProducts,
          fetchProductCategories,
          setProductCategories,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useProducts = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useProducts must be within ProductProvider')
  }

  return context
}
