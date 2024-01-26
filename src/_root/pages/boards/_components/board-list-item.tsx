import { CardProps } from "@/types"

import { Draggable } from '@hello-pangea/dnd'

type BoardListItemProps = {
  card: CardProps,
  index: number
}

const BoardListItem = ({ card, index }: BoardListItemProps) => {
  return (
    <Draggable
      draggableId={card.id}
      index={index}
    >
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="w-auto bg-white border border-gray-200 rounded-md p-2">
          {card.name}
        </div>
      )}
    </Draggable>
  )
}

export default BoardListItem