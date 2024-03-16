import { getDatabase, onValue, ref } from "firebase/database";
import { ITeacher } from "../types";

export const getTeachers = (): ITeacher[] => {
  const db = getDatabase();
  console.log("data0");
  const startCountRef = ref(db, "teachers/");

  onValue(startCountRef, (snapshot) => {
    console.log("data1");
    const data = snapshot.val();
    console.log("data2", data);

    if (!data) return [];

    return data;
  });

  return [];
};
