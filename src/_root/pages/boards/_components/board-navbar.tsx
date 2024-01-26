import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { useFavoriteStore } from '@/store'
import { cn } from "@/lib/utils"
import { toast } from "sonner"

const BoardNavbar = ({ name, data }: { name: string, data: any }) => {

    const { favorites, addFavorite } = useFavoriteStore()

    const handleAddFavorite = () => {
        if (favorites.filter((board: any) => board.id === data.id).length > 0) {
            toast.error('Board already added to favorites!')
            return
        }

        addFavorite(data)
        toast.success('Added to favorites!')
    }

    return (
        <div className="bg bg-gray-100/30 text-white px-6 py-4">
            <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{name}</h1>
                <Button
                    variant='ghost'
                    size='icon'
                    className={cn(
                        favorites.filter((board: any) => board.id === data.id).length > 0 && 'text-yellow-400'
                    )}
                    onClick={handleAddFavorite}
                >
                    <Star className="w-5 h-5" />
                </Button>
            </div>
        </div>
    )
}

export default BoardNavbar