import React, { Suspense, useEffect } from "react";
import { lazy } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import { userExist, userNotExist } from "./redux/reducer/userReducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/api/user";
import { userReducerInitialState } from "./types/reducer-types";
import { Loader } from "./components/loader";
import ProtectedRoute from "./components/protected-route";
import AdminHamburger from "./components/AdminHamburger";
import { useAllOrderQuery } from "./redux/api/order";


// admin routes
const CreateProduct = lazy(() => import("./admin/management/createProduct"));
const UpdateProduct = lazy(() => import("./admin/management/updateProduct"));
const Transactions = lazy(() => import("./admin/management/transactions"));
const TransactionManagement = lazy(() => import("./admin/management/transactionManagement"));

// user routes
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Shipping = lazy(() => import("./pages/Shipping"));
const Login = lazy(() => import("./pages/Login"));
const Search = lazy(() => import("./pages/Search"));
function App() {
  // dispatch is a function/hook that we use to perform some action on store and selector is used to get data from store
  const { user, loading } = useSelector(
    (state: { userReducer: userReducerInitialState }) => {
      return state.userReducer;
    }
  );
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          let data = await getUser(String(user.email));
          if (data?.data?.message) {
            dispatch(userExist(data.data.message));
          } else {
            dispatch(userNotExist());
          }
        } else {
          dispatch(userNotExist());
        }
      } catch (e) {
        console.log(e.message);
      }
    });
  }, []);

return  loading ? (
    <Loader />
  ) : (
    <BrowserRouter> 
    
      <Header user={user}/>
      {user?.role === 'admin' && <AdminHamburger/>}
      <Suspense fallback={<div>Please wait</div>}>
        <Routes>
        {/* adminRoutes */}
        <Route path="admin/product/create" element={<CreateProduct/>}/>
        <Route path="admin/product/update" element={<UpdateProduct/>}/>
        <Route path="admin/product/process" element={<Transactions/>}/>
        <Route path="admin/transaction/:id" element={<TransactionManagement/>}/>
        {/* userRoutes */}
          <Route path="/" element={<Home />} />
          <Route
            path="/Login"
            element={
              <ProtectedRoute isAuthenticated={user ? false : true}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route path="/Search" element={<Search />} />
          <Route
            element={<ProtectedRoute isAuthenticated={user ? true : false} />}
          >
            <Route path="/shipping" element={<Shipping />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
      <Toaster position="bottom-center" />
    </BrowserRouter>
  );
}

export default App;
