import { instance } from "@/utils";
import { trelloUsername } from "@/config";

export async function getAllBoards() {
    try {
        const result = await instance.get(`/1/members/${trelloUsername}/boards`, {
            params: {
                fields: 'name,id,prefs',
            }
        })
        return result.data
    } catch (error) {
        console.log(error)
    }
}

export async function getOneBoard(id: string) {
    try {
        const result = await instance.get(`/1/boards/${id}`, {
            params: {
                fields: 'name,id,prefs',
                lists: 'open',
                list_fields: 'name,id,color,idBoard,pos',
                cards: 'open',
                card_fields: 'name,id,idList',
            }
        })
        return result.data
    } catch (error) {
        console.log(error)
    }
}

export async function createList(idBoard: string, listName: string) {
    try {
        const result = await instance.post(`/1/lists/`, {}, {
            params: {
                idBoard,
                name: listName,
            }
        })
        return result.data
    } catch (error) {
        console.log(error)
    }
}

export async function createCard(id: string, cardName: string) {
    try {
        const result = await instance.post(`/1/cards/`, {}, {
            params: {
                idList: id,
                name: cardName,
            }
        })
        return result.data
    } catch (error) {
        console.log(error)
    }
}