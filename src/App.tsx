import { useEffect, useState } from "react"
import { Pagination } from "./components/Pagination"
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
    const response = await fetch('https://dummyjson.com/products?limit=9', {
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
      <div className="xl:px-60 xl:py-10 sm:px-10 sm:py-10 px-5 py-10 bg-stone-50">
        {/** project details */}
        <div className="project-details flex items-center justify-between">
          <div>
            <h2 className="lg:text-2xl sm:text-xl font-bold lg:first-letter:text-3xl sm:first-letter:text-2xl">Typescript Ecom Landing page with Pagination</h2>
            <p className="text-stone-500 lg:text-sm sm:text-xs">A simple ecom landing page example with pagination feature. See more about on Github.</p>
          </div>
          <div>
            <a href="https://github.com/sssuneeth/typescript-ecom">
              <img className="w-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="" />
            </a>
          </div>
        </div>
        {/** products container */}
        <div className="products-container mt-5">
          <div className="products grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {
              products.map((product: ProductType) => (
                <ProductCard key={product.id} product={product} />
              ))
            }
          </div>
        </div>
        {/** pagination */}
        <Pagination />
      </div>
    </>
  )
}

export default App