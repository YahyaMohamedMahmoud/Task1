import { ShoppingCart } from "lucide-react"
import Button from "../../../Button"

interface IProps {

}
const ProductAction = ({}:IProps) => {
  return (
    <>
    
    <div className="cardAction pt-5">
            <Button intent={"primary"} size={"md"} fullWidth={true} icon={<ShoppingCart />}>
                Add to Cart
            </Button>
        </div>
    </>
  )
}

export default ProductAction