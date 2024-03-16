import { FC, useEffect } from "react";
// import shallow from "zustand/shallow";
import Card from "../components/Card/Card";
import { useTeachers } from "../store";

const TeachersPage: FC = () => {
  const { loading, error, items, loadTeachers } = useTeachers(
    (state) => ({
      loading: state.loading,
      error: state.error,
      items: state.items,
      loadTeachers: state.loadTeachers,
    })
    // shallow
  );

  useEffect(() => {
    loadTeachers();
    console.log(items);
  }, []);

  return (
    <main className="container">
      <Card />
      {items.map((item) => item.id)}
    </main>
  );
};

export default TeachersPage;
