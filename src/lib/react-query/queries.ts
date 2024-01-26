import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createCard, createList, getAllBoards, getOneBoard } from '../features/api';
import { IPostCard, IPostList } from '@/types';

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

export const useCreateList = (boardId: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: IPostList) => createList(data.idBoard, data.listName),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['board', boardId],
            });
        },
    });
};

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