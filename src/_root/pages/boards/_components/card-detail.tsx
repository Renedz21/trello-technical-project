import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { IMainProps } from "@/types"
import { Link } from "react-router-dom"

type ICardDetailProps = {
    data: IMainProps
}

const CardDetail = ({ data }: ICardDetailProps) => {
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
                    <CardTitle className="text-white">
                        {data.name}
                    </CardTitle>
                </CardHeader>
            </Card>
        </Link>

    )
}

export default CardDetail