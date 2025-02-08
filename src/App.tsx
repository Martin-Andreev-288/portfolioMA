import { RouterProvider, createBrowserRouter } from "react-router";
import { About, Contact, Home, Portfolio, QandA, Resume } from "./pages";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <About />
    </>
  );
}

export default App;
