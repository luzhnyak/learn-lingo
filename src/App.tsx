import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import "./firebase-api";
import { SharedLayout } from "./components/SharedLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />}></Route>

        <Route path="teachers" element={<TeachersPage />} />

        <Route path="favorites" element={<FavoritesPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
