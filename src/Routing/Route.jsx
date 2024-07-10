import React, { Suspense } from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import DashbordLayout from "../Layouts/DashbordLayout/DashbordLayout";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Home from "../Pages/Authorised/Home/Home";
import ProductDetails from "../Pages/Authorised/ProductDetails/ProductDetails";
import BuyNow from "../Pages/Authorised/BuyNow/BuyNow";
import Profile from "../Pages/Authorised/Profile/Profile";

function RequireAuth({ isAuthenticated }) {
  let location = useLocation();

  // If user not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // Render DashboardLayouts with a fallback loader
  return (
    <Suspense fallback={<>LOADING...</>}>
      <DashbordLayout />
    </Suspense>
  );
}

function StrictlyNotRequireAuth({ isAuthenticated }) {
  let location = useLocation();

  // Check if authenticated, redirect if true
  if (isAuthenticated) {
    return <Navigate to="/home" state={{ from: location }} />;
  }

  return (
    <Suspense fallback={<>LOADING...</>}>
      <AuthLayout />
    </Suspense>
  );
}

function RoutesComponent() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const isAuthenticated = false;
  console.log("isAuthenticated", isAuthenticated);
  return (
    <HashRouter>
      <Routes>
        {/* for without login pages */}
        <Route
          element={<StrictlyNotRequireAuth isAuthenticated={isAuthenticated} />}
        >
          <Route
            path="/login"
            element={
              <Suspense fallback={<>LOADING...</>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<>LOADING...</>}>
                <Register />
              </Suspense>
            }
          />
        </Route>

        {/* for with login pages */}
        <Route element={<RequireAuth isAuthenticated={isAuthenticated} />}>
          <Route
            path="/home"
            element={
              <Suspense fallback={<>LOADING...</>}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path="/details/:id"
            element={
              <Suspense fallback={<>LOADING...</>}>
                <ProductDetails />
              </Suspense>
            }
          />

          <Route
            path="/buynow"
            element={
              <Suspense fallback={<>LOADING...</>}>
                <BuyNow />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<>LOADING...</>}>
                <Profile />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<>LOADING...</>}>
              <>Not Found</>
            </Suspense>
          }
        />
        <Route
          path=""
          element={
            <Navigate to={isAuthenticated ? "/home" : "/login"} replace />
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default RoutesComponent;
