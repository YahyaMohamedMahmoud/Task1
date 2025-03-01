interface IProps {
    productImage:string;
    title:string;
}
const ProductImage = ({productImage , title}:IProps) => {
  return (
    <>
      <div className="cardImage">
        <img src={productImage} className="w-full h-72 object-contain" alt={title} loading="lazy" />
        </div> 
    
    </>
  )
}

export default ProductImage