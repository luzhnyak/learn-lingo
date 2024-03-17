import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { getDatabase, onValue, ref } from "firebase/database";
import { ITeacher } from "./types";

interface LocalState {
  favorites: ITeacher[];
  addFav: (teacher: ITeacher) => void;
  removeFav: (id: number) => void;
}

export const useLocal = create<LocalState>()(
  devtools(
    persist(
      (set) => ({
        favorites: [],
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
