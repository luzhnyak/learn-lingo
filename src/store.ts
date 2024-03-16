import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { ITeacher } from "./types";
import { getTeachers } from "./services/teachersApi";

interface LocalState {
  favorites: ITeacher[];
  addFav: (teacher: ITeacher) => void;
  removeFav: (id: string) => void;
}

export const useLocal = create<LocalState>()(
  devtools(
    persist(
      (set) => ({
        favorites: [],
        addFav: (teacher) =>
          set((state) => ({ favorites: [...state.favorites], teacher })),

        removeFav: (id) =>
          set((state) => ({
            favorites: [...state.favorites.filter((item) => item.id !== id)],
          })),
      }),
      { name: "local" }
    )
  )
);

interface TeachersState {
  items: ITeacher[];
  loading: boolean;
  error: any;
  loadTeachers: () => void;
}

export const useTeachers = create<TeachersState>()(
  devtools((set) => ({
    items: [],
    loading: false,
    error: null,
    loadTeachers: () => {
      set({ loading: true });

      set(() => ({ items: getTeachers() }));
    },
  }))
);
