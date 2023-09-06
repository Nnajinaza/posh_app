import './App.css';
import "./server"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Cart from './component/Cart';
import Products from './component/Products';
import Missing from './component/Missing';
import Layout from './component/navheader/Layout';
import { ProductContextProvider } from "./component/ProductContext";

function App() {
  return (
    <ProductContextProvider className="App">
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/products" element={< Products />} />
              <Route path="/products/:id"element={< Cart />} />
              <Route  path="/" element={< Home />} />
              <Route path="*" Component={Missing} />
            </Route>
            <Route path='login' element={< Register />} />
            <Route path='register' element={< Login />} />
          </Routes>
        </Router>
    </ProductContextProvider>
  );
}

export default App;