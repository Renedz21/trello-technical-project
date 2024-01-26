import { useQuery } from '@tanstack/react-query';
import { getAllBoards, getOneBoard } from '../features/api';

export const useGetBoards = () => {
    return useQuery({
        queryKey: ['boards'],
        queryFn: () => getAllBoards(),
    })
}

export const useGetOneBoard = (id: string) => {
    return useQuery({
        queryKey: ['board', id],
        queryFn: () => getOneBoard(id),
    })
}
