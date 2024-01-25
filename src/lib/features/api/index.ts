import { instance } from "@/utils";
import { trelloUsername, trelloToken, publicKey, } from "@/config";

export async function getAllBoards() {
    try {
        const result = await instance.get(`/1/members/${trelloUsername}/boards`, {
            params: {
                key: publicKey,
                token: trelloToken,
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
                key: publicKey,
                token: trelloToken,
                fields: 'name,id,prefs',
                list_fields: 'name,id,color,idBoard',
                lists: 'open',
            }
        })

        return result.data

    } catch (error) {
        console.log(error)
    }
}