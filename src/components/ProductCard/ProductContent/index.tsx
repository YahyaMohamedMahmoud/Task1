import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const ProductContent = ({ children }: IProps) => {
  return (
    <>
      <div className="productContent p-5">{children}</div>
    </>
  );
};

export default ProductContent;
