import '../src/app.scss'
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CartPage from "./pages/CartPage/CartPage";
import ItemPage from "./pages/ItemPage/ItemPage";


function App() {
  return (
    <Routes>
      <Route path={'/home'} element={<HomePage />} />
      <Route path={'/catalog'} element={<CatalogPage />} />
      <Route path={'/about'} element={<AboutPage />} />
      <Route path={'/cart'} element={<CartPage />} />
      <Route path={'/item'} element={<ItemPage />} />
    </Routes>
  );
}

export default App;
