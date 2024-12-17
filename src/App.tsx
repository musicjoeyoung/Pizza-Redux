import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;