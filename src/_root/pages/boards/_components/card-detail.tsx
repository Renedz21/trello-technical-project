import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useFavoriteStore } from "@/store"
import { IMainProps } from "@/types"
import { Star } from "lucide-react"
import { Link } from "react-router-dom"

type ICardDetailProps = {
    data: IMainProps
}

const CardDetail = ({ data }: ICardDetailProps) => {

    const { favorites } = useFavoriteStore()

    return (
        <Link
            to={`/boards/${data.id}`}
        >
            <Card
                className="w-auto border-transparent hover:cursor-pointer hover:opacity-85 transition duration-150"
                style={{
                    backgroundImage: `url(${data.prefs.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <CardHeader>
                    <CardTitle className="text-white text-sm text-center flex items-center justify-center gap-2">
                        {data.name}
                        {favorites.includes(data) ? (
                            <Star className="w-5 h-5 text-yellow-500" />
                        ) : null}
                    </CardTitle>
                </CardHeader>
            </Card>
        </Link>

    )
}

export default CardDetail