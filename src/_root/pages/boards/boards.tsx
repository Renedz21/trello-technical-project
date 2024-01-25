import Loader from "@/components/common/loader"
import { useGetBoards } from "@/lib/react-query/queries"
import CardDetail from "./_components/card-detail"
import { IMainProps } from "@/types"
import { Table2 } from "lucide-react"

const Boards = () => {

    const { data, isFetching, isError } = useGetBoards()

    if (isError) {
        return (
            <section className="w-full h-full">
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Something went wrong!</h1>
                    <p className="text-gray-500 dark:text-gray-400">Please try again later.</p>
                </div>
            </section>
        )
    }

    return (
        <section className="w-full h-full">
            <div className="flex items-center gap-4">
                <div className="bg bg-indigo-300 rounded-md p-2">
                    <Table2 size={22} className="text-indigo-600" />
                </div>
                <h1 className="font-semibold text-pretty text-2xl">
                    Your boards
                </h1>
            </div>
            {isFetching && <Loader />}
            <div
                className="mt-4 grid grid-cols-5 gap-4"
            >
                {data && data.map((board: IMainProps) => (
                    <CardDetail
                        key={board.id}
                        data={board}
                    />
                ))}

                {/* <ButtonPopover /> */}
            </div>
        </section>
    )
}

export default Boards