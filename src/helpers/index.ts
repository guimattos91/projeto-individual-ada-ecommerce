// eslint-disable-next-line import/no-extraneous-dependencies
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
export const capitalizeFirstLetters = (sentence: string): string => {
  const words = sentence.split(' ')

  const capitalizedWords = words.map((word) => {
    if (word === '') {
      return ''
    }
    return word.charAt(0).toUpperCase() + word.slice(1)
  })

  return capitalizedWords.join(' ')
}
