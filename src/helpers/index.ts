import slugify from 'slugify'

export const formatPrice = (price: number): string => {
  const priceStr = price.toString()
  if (priceStr.includes('.')) {
    const [, decimalPart] = priceStr.split('.')
    if (decimalPart.length === 2) {
      return priceStr
    }
  }

  if (priceStr.includes('.') && priceStr.split('.')[1].length === 1) {
    return `${priceStr}0`
  }

  if (!priceStr.includes('.')) {
    return `${priceStr}.00`
  }

  return priceStr
}
export const strToSlug = (str: string): string =>
  slugify(str, {
    remove: /[^0-9a-zA-Z\s]/gim,
    lower: true,
    trim: true,
  })
