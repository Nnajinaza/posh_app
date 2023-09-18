import "./App.css";
import "./server";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OurStore from "./pages/OurStore";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./component/Cart";
import Products from "./component/Products";
import Missing from "./component/Missing";
import Layout from "./component/navheader/Layout";
import { ProductContextProvider } from "./component/ProductContext";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Wishlist from "./pages/Wishlist";
import SingleProduct from "./pages/SingleProduct";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Products />} />
          <Route path="contact" element={<ContactUs />} />
          {/* <Route path="store" element={<OurStore />} /> */}
          <Route path="blog" element={<Blog />} />
          <Route path="products" element={<OurStore />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="/products:id" element={<SingleProduct/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="*" Component={Missing} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
