import { useState } from "react"
import Button from "../Button"
import { Plus } from "lucide-react"
import AddProduct from "../Modal"

const NavBar = () => {

  const[openModal , setOpenModal] = useState(false)

  return (
   <>
   <div className="flex justify-between items-center p-5">

    <h1 className="text-2xl font-bold">
        Our Products
    </h1>

    <Button intent={"primary"} size={"md"} icon={<Plus/>} onClick={() => setOpenModal(true)}>
       Add Product
    </Button>


   </div>
    {/* Modal */}
    {
      openModal && <AddProduct setOpenModal={setOpenModal}/>
    }
   </>
  )
}

export default NavBar