import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"


const menuOptions = [
    {
        key:"1",
        name: 'about link'
    },
    {
        key:"2",
        name: 'contact link'
    }
  ]
  

const footer = cva(
    [
        //include styles
        "border",
        "px-4",
        "py-2",
        "hover: bg-green-200"
    ],
    {
        variants: {
            intent: {
                dark: ["bg-blue-600"],
                bright: ["bg-yellow-300"]
            },
            size: {
                sm: ["max-w-40"],
                md: ["max-w-60"]
            },
            underline: {true: ["underline"], false: []},
        },
        defaultVariants: {
            intent: "dark",
            size: 'md',
        }
    }
)
export interface FooterProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof footer > {
    underline?: boolean
    menu: Option[]
}

interface Option {
    key: string
    name: string
}

export function Footer({className, intent, size, underline ,...props} : FooterProps) {
    return (
        <div className={twMerge(footer({intent,size,className,underline}))} {...props}>
            {
                menuOptions.map((item) => (<p id={item.key}>{item.name} : {props.children}</p>))
            }
        </div>
    )
}