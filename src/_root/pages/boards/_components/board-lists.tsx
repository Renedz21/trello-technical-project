import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CardProps, List } from "@/types";
import { Draggable, Droppable } from '@hello-pangea/dnd'
import BoardListItem from "./board-list-item";
import ButtonPopover from "./button-popover";
import CreateCardForm from "./create-card-form";

type BoardListsProps = {
    list: List;
    cards: CardProps[];
    index: number;
}

const BoardLists = ({ cards, list, index }: BoardListsProps) => {
    return (
        <Draggable
            draggableId={list.id}
            index={index}
        >
            {(provided) => (
                <Card
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    key={list.id}
                    className='w-72 h-fit flex flex-col justify-between'
                >
                    <CardHeader
                        {...provided.dragHandleProps}
                    >
                        <CardTitle>{list.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Droppable
                            droppableId={list.id}
                            type="card"
                        >
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className='flex flex-col gap-2'>
                                    {
                                        cards.filter((card: CardProps) => card.idList === list.id)
                                            .map((card: CardProps, index: number) => (
                                                <BoardListItem
                                                    key={card.id}
                                                    card={card}
                                                    index={index}
                                                />
                                            ))
                                    }
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </CardContent>
                    <CardFooter>
                        <ButtonPopover
                            className="w-full"
                            title="Add a card"
                        >
                            <CreateCardForm
                                listId={list.id}
                            />
                        </ButtonPopover>
                    </CardFooter>
                </Card>
            )}
        </Draggable>

    )
}

export default BoardLists