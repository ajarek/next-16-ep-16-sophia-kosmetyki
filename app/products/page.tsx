import Products from "@/components/Products"

const ProductsPage = () => {
  return (
    <div className='min-h-screen pt-20 '>
      <Products
        label='Nasze Produkty'
        description='Odkryj naszą szeroką gamę produktów'
        number={16}
      />
    </div>
  )
}

export default ProductsPage
