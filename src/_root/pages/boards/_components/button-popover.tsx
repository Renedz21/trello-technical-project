import React from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

type ButtonPopoverProps = {
    children: React.ReactNode
    title: string
    className?: string
}
const ButtonPopover = ({ children, title, className }: ButtonPopoverProps) => {
    return (
        <Popover>
            <PopoverTrigger
                asChild
            >
                <Button
                    className={cn(
                        "flex items-center gap-2 text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800"
                        , className
                    )}
                >
                    <Plus className="h-4 w-4" />
                    {title}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                {children}
            </PopoverContent>
        </Popover>
    )
}

export default ButtonPopover