<<<<<<< HEAD
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/404/404";
import ProductPage from './pages/ProductPage/ProductPage';
import Category from "./pages/Category/Category";
import Login from './pages/login-signup/Login';
import SignUp from "./pages/SignUp/SignUp";

=======
import Home from "./pages/Home/Home"
import PageNotFound from "./pages/404/404"
import ProductPage from './pages/ProductPage/ProductPage'
import Category from "./pages/Category/Category"
import Login from './pages/Login/Login'
import SignUp from "./pages/SignUp/SignUp"
import ContactUs from './pages/Contact-Us/ContactUs'
<<<<<<< HEAD
 
>>>>>>> e431271c004238edced34ce7f67f498d65fff950
=======
>>>>>>> 9bda70881478c39828fd086eaa7ab3b8e446a9e7
const routes = [
  {
    path: '/', element: <Home />
  },
  {
    path: '/*', element: <PageNotFound />
  },
  {
    path: '/Product', element: <ProductPage />
  },
  {
    path: '/Category', element: <Category />
  },
  {
    path: '/Login', element: <Login />
  },
  {
    path: '/SignUp', element: <SignUp />
  },
  {
    path: '/ContactUs', element: <ContactUs />
  }
]
export default routes;