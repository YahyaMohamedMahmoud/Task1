import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../Button";
import { IButtonProps } from "../../../interfaces/inputs";

interface IProps {
  setOpenModal: (value: boolean) => void;
}

const FormData: IButtonProps = {
  title: "",
  price: "",
  description: "",
  category: "",
};

const Form = ({ setOpenModal }: IProps) => {
  const [inputsData, setInputsData] = useState<IButtonProps>(FormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputsData({
      ...inputsData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputsData);
    setInputsData(FormData);
    setOpenModal(false);
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter Product Title"
            className="w-full px-4 py-2 border border-gray-300 mt-2 rounded-lg focus:outline-none focus:ring-0"
            value={inputsData.title}
            name="title"
            id="title"
            onChange={handleChange}
          />
        </div>

        {/* Description */}
        <div>
          <label
            className="block text-gray-700 font-medium"
            htmlFor="description"
          >
            Description
          </label>
          <input
            type="text"
            placeholder="Enter Product Description"
            className="w-full px-4 py-2 border border-gray-300 mt-2 rounded-lg focus:outline-none focus:ring-0"
            value={inputsData.description}
            name="description"
            id="description"
            onChange={handleChange}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-medium" htmlFor="category">
            Category
          </label>
          <input
            type="text"
            placeholder="Enter Product Category"
            className="w-full px-4 py-2 border border-gray-300 mt-2 rounded-lg focus:outline-none focus:ring-0"
            value={inputsData.category}
            name="category"
            id="category"
            onChange={handleChange}
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-medium" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            placeholder="Enter Product price"
            className="w-full px-4 py-2 border border-gray-300 mt-2 rounded-lg focus:outline-none focus:ring-0"
            id="price"
            value={inputsData.price}
            name="price"
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-end items-center space-x-4">
          <Button
            intent={"secondary"}
            size={"sm"}
            onClick={() => setOpenModal(false)}
          >
            Close
          </Button>
          <Button intent={"primary"} size={"sm"} type="submit">
            Add Product
          </Button>
        </div>
      </form>
    </>
  );
};

export default Form;
