import Form from "./Form";


interface IProps {
    setOpenModal : (value:boolean) => void;

}




const AddProduct = ({setOpenModal}:IProps) => {
    


      


  return (
    <>

<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-base font-semibold text-gray-900" id="modal-title">Add Product</h3>
            </div>
          </div>
            {/* Form */}
            <div className="w-full p-4">
                <Form setOpenModal={setOpenModal}/>
             </div>
            {/* Form */}

        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default AddProduct