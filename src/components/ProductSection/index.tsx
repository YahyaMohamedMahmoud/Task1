import ProductCard from "../ProductCard"
import FetchingData from "../FetchingData";


const ProductSection = () => {

 const {data , loading} = FetchingData();
  return (
    <>
    
    <div className="grid gap-4 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
      loading ? <div className="h-screen flex items-center justify-center">
        <span className="text-2xl font-bold text-center">
        Loading...
        </span>
      </div>
      :
      data.map((product:any) => {
        return <ProductCard key={product.id} product={product}/>
    })
    }
    
    </div>

    </>
  )
}

export default ProductSection