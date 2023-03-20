import { useEffect, useState } from "react"
import { Pagination } from "./components/Pagination"
import { ProductCard } from "./components/ProductCard"
import { SkeltonLoader } from "./components/SkeltonLoader"
import { ProductType } from "./types/Product.types"

function App() {
  document.title = 'Typescript E-com Pagination example'

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [productsTotal, setProductsTotal] = useState(0)
  const [skip, setSkip] = useState(0)

  const currentPage = (skip / 10) + 1
  const totalPage = productsTotal / 10

  useEffect(() => {
    setLoading(true)
    fetchProducts()
  }, [skip])

  const fetchProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=9&skip=${skip}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    if (!response.ok) return
    setProducts(data.products)
    setProductsTotal(data.total)
    setLoading(false)
  }

  const prevPageHandle = (value: number) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setSkip(skip - value)
  }
  const nextPageHandle = (value: number) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setSkip(skip + value)
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
            <a target={'_blank'} href="https://github.com/sssuneeth/typescript-ecom">
              <img className="w-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="" />
            </a>
          </div>
        </div>
        {/** products container */}
        <div className="products-container mt-5">
          <div className="products grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {
              !loading ?
                products.map((product: ProductType) => (
                  <ProductCard key={product.id} product={product} />
                ))
                :
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map(el => (
                  <SkeltonLoader key={el} />
                ))
            }
          </div>
        </div>
        {/** pagination */}
        <Pagination setSkip={setSkip} totalPage={totalPage} />
      </div>
    </>
  )
}

export default App