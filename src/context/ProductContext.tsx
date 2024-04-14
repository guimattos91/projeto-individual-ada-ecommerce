import {
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
  cart: ProductType[]
  isLoading: boolean
  error: string | null
  fetchProduct: (id: number) => void
  fetchProducts: () => void
  fetchCategories: () => void
  addToCart: (quantity: number) => void
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
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [cart, setCart] = useState<ProductType[]>([])

  const fetchProducts = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get('/')
      setProducts(data)
    } catch {
      setError('Error: Product Not Found')
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
      setError('Error: Product Not Found')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchCategories = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`categories`)
      setCategories(data)
    } catch {
      setError('Error: Category Not Found')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const addToCart = useCallback(
    (quantity: number): void => {
      if (!product) {
        return
      }

      const existingCartItem = cart.find((item) => item.id === product.id)
      if (existingCartItem) {
        const updatedCart = cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + quantity }
          }
          return item
        })
        setCart(updatedCart)
      } else {
        const newCartItem = { ...product, quantity }
        setCart([...cart, newCartItem])
        localStorage.setItem('cart', JSON.stringify([...cart, newCartItem]))
      }
    },
    [cart, product],
  )
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
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
          cart,
          isLoading,
          error,
          fetchProduct,
          fetchProducts,
          fetchCategories,
          addToCart,
        }),
        [
          product,
          products,
          isLoading,
          error,
          categories,
          cart,
          fetchProduct,
          fetchProducts,
          fetchCategories,
          addToCart,
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
