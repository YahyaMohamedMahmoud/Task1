import ProductContent from "./ProductContent"
import ProductAction from "./ProductContent/ProductAction"
import ProductCategory from "./ProductContent/ProductCategory"
import ProductDesc from "./ProductContent/ProductDesc"
import ProductRate from "./ProductContent/ProductRate"
import ProductStock from "./ProductContent/ProductStock"
import ProductTitle from "./ProductContent/ProductTitle"
import ProductImage from "./ProductImage"

interface IProps {
    product:any;
}
const ProductCard = ({product : {thumbnail , title , price , category ,rating ,stock , description}}:IProps) => {
  return (
    <>
        <div className="rounded-md border border-gray-300">

        {/* Product image */}
        <ProductImage productImage={thumbnail} title={title}/>
        {/* Product image */}

        {/* Product content */}
        <ProductContent>

        <ProductTitle title={title} price={price}/>
        <ProductCategory category={category}/>
        <ProductDesc description={description}/>
        <ProductRate rating={rating} star={[1,2,3,4,5]}/>
        <ProductStock stock={stock}/>
        
        <ProductAction/>        

        </ProductContent>
        {/* Product content */}

    </div>
    </>
  )
}

export default ProductCard