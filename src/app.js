import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ReastaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

// Lazy loading of components, we need to import it like this
const Grocery = lazy(() => import("./components/Grocery"));

// Main app LAyout
const AppLayout = () => {
  return (
    <div className="app ">
      <Header />
      <div className="p-8 max-w-[1440px] w- shadow-lg rounded-md m-auto">
        <Outlet />
      </div>
    </div>
  );
};

// Configuration of react browser router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", exact: true, element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <ReastaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
