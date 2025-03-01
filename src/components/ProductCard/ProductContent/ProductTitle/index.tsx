interface IProps {
   title:string ;
   price:number;
}
const ProductTitle = ({title , price}:IProps) => {
  return (
   <>
   <div className="cardTitle flex flex-row justify-between items-center pt-4">
            <h2 className="text-xl font-bold">
                {`${title.slice(0, 21)}...`}
            </h2>

            <p className="font-bold">
                {`$${price}`}
            </p>
        </div>
   </>
  )
}

export default ProductTitle