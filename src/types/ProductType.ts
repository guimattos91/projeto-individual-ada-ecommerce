type RatingType = {
  rate: number
  count: number
}

export type ProductType = {
  quantity: number
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: RatingType
}

export type CategoryType = string
