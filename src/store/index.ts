import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface MyState {
    favorites: any[]
    addFavorite: (item: any) => void
}

export const useFavoriteStore = create<MyState>()(
    persist(
        (set, get) => ({
            favorites: [],
            addFavorite: (item) => set({ favorites: [...get().favorites, item] }),
        }),
        {
            name: 'favorite-storage',
            partialize: (state) => ({
                favorites: state.favorites,
            }),
        },
    ),
)