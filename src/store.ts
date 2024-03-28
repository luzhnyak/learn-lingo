import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { getDatabase, onValue, ref } from "firebase/database";
import { ITeacher, IUser } from "./types";

interface LocalState {
  currentUser: IUser | null;
  isLogin: boolean;
  favorites: ITeacher[];
  login: (user: IUser) => void;
  logout: () => void;
  addFav: (teacher: ITeacher) => void;
  removeFav: (id: number) => void;
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
  loading: boolean;
  error: Error | null;
  loadTeachers: () => void;
}

export const useTeachers = create<TeachersState>()(
  devtools((set) => ({
    items: [],
    loading: false,
    error: null,
    loadTeachers: () => {
      set({ loading: true });

      const db = getDatabase();
      onValue(ref(db, "teachers/"), (snapshot) => {
        const data = snapshot.val();

        if (!data) {
          set({ loading: false });
          return;
        }

        set(() => ({ items: data }));
        set({ loading: false });
      });
    },
  }))
);
