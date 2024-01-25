import { useParams } from 'react-router-dom'

import BoardNavbar from "./_components/board-navbar"
import { useGetOneBoard } from '@/lib/react-query/queries'

const BoardDetails = () => {

    const { boardId } = useParams<{ boardId: string }>()

    const { isLoading, data, isError } = useGetOneBoard(boardId as string)

    if (isLoading) return <div>Loading...</div>

    if (isError) return <div>Error</div>

    console.log(data)

    return (
        <section>
            <BoardNavbar
                name={data?.name as string}
            />

            <div>

            </div>
        </section>
    )
}

export default BoardDetails