import "./App.css";
import "./server";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OurStore from "./pages/OurStore";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Products from "./component/Products";
import Missing from "./component/Missing";
import Layout from "./component/navheader/Layout";
import { ProductContextProvider } from "./component/ProductContext";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Wishlist from "./pages/Wishlist";
import SingleProduct from "./pages/SingleProduct";
import ForgotPassword from "./pages/ForgotPassword";
import Checkout from "./pages/Checkout";
import Loginn from "./pages/Loginn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Products />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="blog" element={<Blog />} />
          <Route path="products" element={<OurStore />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="/products:id" element={<SingleProduct/>} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Loginn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="*" Component={Missing} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
