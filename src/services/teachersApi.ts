import {
  getDatabase,
  ref,
  query,
  orderByKey,
  limitToFirst,
  startAfter,
  get,
} from "firebase/database";
import { ITeacher } from "../types";

export const getTeachers = async (lastKey: string) => {
  const db = getDatabase();
  const newItems: ITeacher[] = [];

  const recentPostsRef = query(
    ref(db, "teachers"),
    orderByKey(),
    startAfter(lastKey),
    limitToFirst(4)
  );

  const snapshot = await get(recentPostsRef);

  snapshot.forEach((childSnapshot) => {
    newItems.push({
      ...childSnapshot.val(),
      id: childSnapshot.key,
    });
  });

  return newItems;
};
