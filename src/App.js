import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import InfoPage from "./pages/InfoPage/InfoPage";
import CartPage from "./pages/CartPage/CartPage";


function App() {
  return (
      <>
        <Routes>
          <Route path={'/home'} element={<HomePage />} />
          <Route path={'/catalog'} element={<CatalogPage />} />
          <Route path={'/info'} element={<InfoPage />} />
          <Route path={'/cart'} element={<CartPage />} />
        </Routes>
      </>
  );
}

export default App;
