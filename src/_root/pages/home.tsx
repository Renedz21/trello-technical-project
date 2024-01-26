import { useFavoriteStore } from "@/store"
import CardDetail from "./boards/_components/card-detail"
import { Link } from "react-router-dom"
import { useGetBoards } from "@/lib/react-query/queries"
import { Suspense } from "react"
import { IMainProps } from "@/types"
import Loader from "@/components/common/loader"

const Home = () => {

    const { favorites } = useFavoriteStore()

    const { data, isFetching, isLoading } = useGetBoards()

    return (
        <section className="w-full h-full p-8">
            <div>
                <div className="text-gray-600 text-pretty">
                    <h1 className="text-4xl font-semibold">
                        Welcome to the Trello Clone!
                    </h1>
                    <p className="mt-4 text-base font-medium">
                        This is a clone of the popular productivity tool Trello. It was built using React, TypeScript, TailwindCSS, and Zustand.
                    </p>
                </div>
                <div className="space-y-4 mt-4">
                    <Link
                        to='/favorites'
                        className="font-semibold text-lg hover:underline">
                        ({favorites.length}) Favorites Boards
                    </Link>

                    <div className="grid grid-cols-6 gap-6 w-auto">
                        {favorites.map((favorite) => (
                            <CardDetail
                                key={favorite.id}
                                data={favorite}
                            />
                        ))}
                    </div>
                </div>
                <div className="space-y-4 mt-4">
                    <Link
                        to='/boards'
                        className="font-semibold text-lg hover:underline">
                        Your Boards
                    </Link>

                    <div className="grid grid-cols-6 gap-6 w-auto">

                        {isFetching && isLoading && <div className="flex items-center justify-center"><Loader /></div>}

                        <Suspense
                            fallback={<div>Loading...</div>}
                        >
                            {data && !isLoading && data.map((board: IMainProps) => (
                                <CardDetail
                                    key={board.id}
                                    data={board}
                                />
                            ))}
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home