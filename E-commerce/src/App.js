import "./App.css";
// import "./server";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import OurStore from "./pages/OurStore.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import Products from "./component/Products.jsx";
import Missing from "./component/Missing.jsx";
import Layout from "./component/navheader/Layout.jsx";
import { ProductContextProvider } from "./component/ProductContext.jsx";
import Blog from "./pages/Blog.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Checkout from "./pages/Checkout.jsx";
import SignUp from "./pages/SignUp.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";


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
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="*" Component={Missing} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
