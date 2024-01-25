import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const BoardNavbar = ({ name }: { name: string }) => {
    return (
        <div className="">
            <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{name}</h1>
                <Button
                    variant='ghost'
                    size='icon'
                >
                    <Star className="w-5 h-5" />
                </Button>
            </div>
        </div>
    )
}

export default BoardNavbar