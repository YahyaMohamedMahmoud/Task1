interface IProps {
  category:string;
}
const ProductCategory = ({category}:IProps) => {
  return (
    <>
     <div className="cardCategory">
            <span className="text-gray-500">
                {category}
            </span>
        </div>
    </>
  )
}

export default ProductCategory