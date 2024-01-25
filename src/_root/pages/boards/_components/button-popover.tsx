import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import BoardForm from "./create-list-form"

const ButtonPopover = () => {
    return (
        <Popover>
            <PopoverTrigger
                asChild
            >
                <Button
                    className="w-full h-full text-lg bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800"
                >
                    Create new board
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <BoardForm />
            </PopoverContent>
        </Popover>
    )
}

export default ButtonPopover