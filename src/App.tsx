import { RouterProvider, createBrowserRouter } from "react-router";
import { AppLayout } from "@/components";
import { About, Contact, Home, Portfolio, QandA, Resume } from "./features";
import { Error } from "./pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "q&a",
          element: <QandA />,
        },
        {
          path: "resume",
          element: <Resume />,
        },
      ],
    },
  ],
  {
    basename: "/portfolioMA/",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
