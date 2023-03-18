import { useEffect, useState } from "react"
import { ProductCard } from "./components/ProductCard"
import { ProductType } from "./types/Product.types"

function App() {
  document.title = 'Typescript E-com Pagination example'
  const [products, setProducts] = useState([])
  const [productsTotal, setProductsTotal] = useState({})

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products?limit=10', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    if (!response.ok) return
    setProducts(data.products)
    setProductsTotal(data.total)
    console.log(data.products)
  }

  return (
    <>
      <div className="xl:px-60 xl:py-10 sm:px-10 sm:py-10 bg-stone-50">
        <div className="products-container">
          <div className="products grid xl:grid-cols-3 sm:grid-cols-2 gap-5">
            {
              products.map((product: ProductType) => (
                <ProductCard key={product.id} product={product} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App