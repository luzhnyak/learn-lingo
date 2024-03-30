import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { ITeacher, IUser } from "./types";
import { getTeachers } from "./services/teachersApi";

interface LocalState {
  currentUser: IUser | null;
  isLogin: boolean;
  favorites: ITeacher[];
  login: (user: IUser) => void;
  logout: () => void;
  addFav: (teacher: ITeacher) => void;
  removeFav: (id: string) => void;
}

export const useLocal = create<LocalState>()(
  devtools(
    persist(
      (set) => ({
        isLogin: false,
        currentUser: null,
        favorites: [],
        login: (user) => set(() => ({ currentUser: user, isLogin: true })),
        logout: () => set(() => ({ currentUser: null, isLogin: false })),
        addFav: (teacher) =>
          set((state) => ({ favorites: [...state.favorites, teacher] })),

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
  lastKey: string;
  loading: boolean;
  error: Error | null;
  loadTeachers: () => void;
}

export const useTeachers = create<TeachersState>()(
  devtools((set) => ({
    items: [],
    loading: false,
    lastKey: "-t0",
    error: null,
    loadTeachers: async () => {
      set({ loading: true });

      const currentState = useTeachers.getState();

      console.log("currentState.lastKey", currentState);

      const newItems = await getTeachers(currentState.lastKey);

      console.log("newItems", newItems);

      set((state) => ({ items: [...state.items, ...newItems] }));

      set((state) => ({ lastKey: state.items[state.items.length - 1].id }));
    },
  }))
);
