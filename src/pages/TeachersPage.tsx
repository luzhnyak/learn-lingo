import { FC, useEffect } from "react";
// import shallow from "zustand/shallow";
import Card from "../components/Card/Card";
import { useTeachers } from "../store";
// import { getTeachers } from "../services/teachersApi";

const TeachersPage: FC = () => {
  const { items, loadTeachers } = useTeachers(
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
  }, [loadTeachers]);

  return (
    <main className="container">
      {items.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </main>
  );
};

export default TeachersPage;
