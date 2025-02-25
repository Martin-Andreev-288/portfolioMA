import { RouterProvider, createBrowserRouter } from "react-router";
import AppLayout from "./layouts/AppLayout";
import { ErrorElement } from "@/components";
import { About, Contact, Home, Portfolio, QandA, Resume } from "./features";
import { Error } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorElement />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
        errorElement: <ErrorElement />,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <ErrorElement />,
      },
      {
        path: "q&a",
        element: <QandA />,
        errorElement: <ErrorElement />,
      },
      {
        path: "resume",
        element: <Resume />,
        errorElement: <ErrorElement />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
