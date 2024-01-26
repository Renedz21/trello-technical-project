import { useFavoriteStore } from "@/store"
import { Heart } from "lucide-react"
import CardDetail from "../boards/_components/card-detail"

const Favorites = () => {

    const { favorites } = useFavoriteStore()
    console.log(favorites)

    return (
        <section className="w-full h-full p-8">
            <div className="flex items-center gap-4">
                <div className="bg bg-rose-200 rounded-md p-2">
                    <Heart size={22} className="text-rose-600" />
                </div>
                <h1 className="font-semibold text-pretty text-2xl">
                    Your favorites boards
                </h1>
            </div>


            <div
                className="mt-4 grid grid-cols-5 gap-4"
            >
                {favorites && favorites.map((board: any) => (
                    <CardDetail
                        key={board.id}
                        data={board}
                    />
                ))}
            </div>
        </section>
    )
}

export default Favorites