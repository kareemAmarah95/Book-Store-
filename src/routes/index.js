import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import HomeLayout from "../layouts/HomeLayout";
import AddBook from "../pages/Admin/AddBook";
import BooksList from "../pages/Admin/BooksList";
import BookDetails from "../pages/BookDetails";
import HomePage from "../pages/HomePage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <h1 className="text-center">404 Not Found Page</h1>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: "Hello About Page",
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
    ],
  },

  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <BooksList /> },
      {
        path: "add-book",
        element: <AddBook />,
      },
    ],
  },
]);
