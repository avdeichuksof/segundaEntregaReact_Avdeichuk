import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import NavCategory from './components/NavCategory/NavCategory';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <NavCategory />
      <Routes>
        <Route exact path="/" element= {<ItemListContainer />} />
        <Route exact path="/category/:id" element= {<ItemListContainer />} />
        <Route exact path="/productos" element= {<ItemListContainer />} />
        <Route exact path="/cart" element= {<CartContainer />} />
        <Route exact path="/item/:id" element= {<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
