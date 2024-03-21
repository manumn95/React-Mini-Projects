import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Fullstack from "./Components/Fullstack";
import Datascience from "./Components/Datascience";
import Cybersecurity from "./Components/Cybersecurity";
import Careers from "./Components/Careers";
import All from "./Components/All";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: "",
          element: <All></All>,
        },
        {
          path: "fullstack",
          element: <Fullstack></Fullstack>,
        },
        {
          path: "cybersecurity",
          element: <Cybersecurity></Cybersecurity>,
        },
        {
          path: "datascience",
          element: <Datascience></Datascience>,
        },
        {
          path: "careers",
          element: <Careers></Careers>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
