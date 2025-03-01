interface IProps {
  stock:number;
}
const ProductStock = ({stock}:IProps) => {
  return (
    <>
      <div className="cardStock flex flex-row justify-between items-center">
            <span className="text-black font-bold">
                Stock : {stock}
            </span>
            {
              stock < 50 ? <span className="bg-red-600 text-white text-sm py-1 px-3 font-bold  rounded-full">
              Low Stock
          </span> : ""
            }
        </div>
    </>
  )
}

export default ProductStock