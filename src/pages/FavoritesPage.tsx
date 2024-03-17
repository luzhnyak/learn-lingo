import Card from "../components/Card/Card";
import { useLocal } from "../store";

const FavoritesPage = () => {
  const { favorites } = useLocal((state) => ({
    favorites: state.favorites,
  }));

  return (
    <main className="container">
      {favorites.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </main>
  );
};

export default FavoritesPage;
