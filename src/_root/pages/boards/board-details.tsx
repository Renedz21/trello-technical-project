import { useParams } from 'react-router-dom'

import BoardNavbar from "./_components/board-navbar"
import { useGetOneBoard } from '@/lib/react-query/queries'
import ButtonPopover from './_components/button-popover'
import { CardProps, List } from '@/types'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



const BoardDetails = () => {

    const { boardId } = useParams<{ boardId: string }>()


    const { isLoading, data, isError } = useGetOneBoard(boardId as string)

    if (isLoading) return <div>Loading...</div>

    if (isError) return <div>Error</div>

    console.log(data)

    return (
        <section
            className='w-full h-full flex flex-col space-y-6'
            style={{
                backgroundImage: `url(${data?.prefs.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <BoardNavbar
                name={data?.name as string}
            />

            <div className='px-6 py-4'>
                <div className='w-full flex gap-4 snap-x snap-mandatory overflow-x-scroll overflow-y-hidden md:overflow-visible'>
                    {data.lists.map((list: List) => (
                        <Card
                            key={list.id}
                            className='w-72'
                        >
                            <CardHeader>
                                <CardTitle>{list.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className='flex flex-col gap-2'>
                                    {
                                        data.cards.filter((card: CardProps) => card.idList === list.id)
                                            .map((card: CardProps) => (
                                                <div
                                                    key={card.id}
                                                    className='bg-white rounded-md p-2 border shadow-md'
                                                >
                                                    <span className='text-sm'>{card.name}</span>
                                                </div>
                                            ))
                                    }
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    variant='secondary'
                                    className='flex items-center gap-4 w-full'
                                >
                                    <Plus className="w-5 h-5" />
                                    Add a card
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                    <ButtonPopover
                        title="Add a list"
                    >
                        <div></div>
                    </ButtonPopover>
                </div>
            </div>
        </section>
    )
}

export default BoardDetails