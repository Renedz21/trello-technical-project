import { useParams } from 'react-router-dom'

import BoardNavbar from "./_components/board-navbar"
import { useGetOneBoard } from '@/lib/react-query/queries'
import ButtonPopover from './_components/button-popover'
import { List } from '@/types'
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import BoardLists from './_components/board-lists'
import CreateListForm from './_components/create-list-form'

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
}

const BoardDetails = () => {

    const { boardId } = useParams<{ boardId: string }>()

    const { isLoading, data, isError } = useGetOneBoard(boardId as string)

    if (isLoading) return <div>Loading...</div>

    if (isError) return <div>Error</div>

    const onDragEnd = (result: any) => {
        const { destination, source, type } = result;

        if (!destination) return;

        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        if (type === 'list') {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            reorder(
                data.lists,
                source.index,
                destination.index
            ).map((item: any, index) => ({ ...item, order: index }))
        }

        if (type === 'card') {
            const newOrderedData = [...data.cards]

            const sourceList = newOrderedData.find((card) => card.id === source.droppableId)
            const destinationList = newOrderedData.find((card) => card.id === destination.droppableId)

            if (!sourceList || !destinationList) return;

            if (!sourceList.cards) {
                sourceList.cards = []
            }

            if (!destinationList.cards) {
                destinationList.cards = []
            }

            if (sourceList.droppableId === destination.droppableId) {
                const reorderedCards = reorder(
                    sourceList.cards,
                    source.index,
                    destination.index
                )

                reorderedCards.forEach((card: any, index) => {
                    card.order = index
                })

                sourceList.cards = reorderedCards
            }

        }
    }

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
                data={data}
            />
            <DragDropContext
                onDragEnd={onDragEnd}
            >
                <div className='px-6 py-4'>
                    <Droppable
                        droppableId='board-lists'
                        type='list'
                        direction='horizontal'
                    >
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className='w-full flex gap-4 snap-x snap-mandatory overflow-x-scroll overflow-y-hidden md:overflow-visible'>
                                {data.lists.map((list: List, index: number) => (
                                    <BoardLists
                                        key={list.id}
                                        index={index}
                                        cards={data.cards}
                                        list={list}
                                    />
                                ))}
                                {provided.placeholder}
                                <ButtonPopover
                                    title="Add a list"
                                >
                                    <CreateListForm />
                                </ButtonPopover>
                            </div>
                        )}
                    </Droppable>
                </div>
            </DragDropContext>
        </section>
    )
}

export default BoardDetails