import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva , type VariantProps} from "class-variance-authority";
import { tailwindMerge } from "../../Utils";


const buttonVariants = cva("rounded-md font-normal cursor-pointer flex flex-row gap-2" , {
    variants : {
        intent:{
            primary:"bg-black text-white",
            secondary:"bg-white text-black border border-black",
        },
        size:{
            sm:"text-sm px-4 py-2",
            md:"text-md px-6 py-2.5",
            lg:"text-lg px-8 py-4"
        },
        fullWidth:{
            true:"w-full items-center justify-center",
        }
        },
        defaultVariants:{
            intent:"primary",
            size:"md",
            fullWidth:false
        }
})

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> , VariantProps<typeof buttonVariants> {
children: ReactNode;
icon?: ReactNode;
}

const Button = ({children , icon , intent , size , fullWidth , ...rest}:IProps) => {
  return (
    <>
    <button className={`${tailwindMerge(buttonVariants({intent , size , fullWidth}))} `} {...rest}>
        {icon} {children}
    </button>
    </>
  )
}

export default Button