import { PRODUCTS } from '../data/products'

const sleep = (ms = 700) => new Promise(res => setTimeout(res, ms))

export const getProducts = async (categoryId) => {
  await sleep()
  if (!categoryId) return PRODUCTS
  return PRODUCTS.filter(p => p.category === categoryId)
}

export const getProductById = async (id) => {
  await sleep()
  return PRODUCTS.find(p => p.id === id) || null
}
