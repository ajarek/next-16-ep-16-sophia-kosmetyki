"use client"

import { useCartStore } from "@/store/cartStore"

const LengthCart = () => {
  const { items } = useCartStore()
  const length = items.reduce((acc, item) => acc + (item.quantity ?? 1), 0)
  return <div>{length}</div>
}

export default LengthCart
