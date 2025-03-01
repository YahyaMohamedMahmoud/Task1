interface IProps {
  description:string;
}
const ProductDesc = ({description}:IProps) => {
  return (
    <>
          <div className="cardDescription pt-4">
            <p className="text-gray-500 font-semibold">
                {description.slice(0, 70)}...
            </p>
        </div>
    </>
  )
}

export default ProductDesc