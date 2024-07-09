import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants'

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode
}


const buttonVariants = tv ({
    base: 'py-2 px-5 font-medium flex items-center gap-2 rounded-md justify-center', 
    variants: {
        variant: {
            primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
            secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
        },
        size: {
            default: 'py-2',
            full: 'w-full h-11'
        },

    },

    defaultVariants: {
        variant: 'primary',
        size: 'default',
    },

})

export function Button( {children, size,  variant, ...props}: ButtonProps) {
    return(
        <button {...props} className={buttonVariants({variant, size})}>
        {children}
        </button>
    )
}