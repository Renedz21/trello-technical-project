import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createCard, getAllBoards, getOneBoard } from '../features/api';
import { IPostCard } from '@/types';

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

export const useCreateCardInList = (boardId: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: IPostCard) => createCard(data.id, data.cardName),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['board', boardId],
            });
        },
    });
};