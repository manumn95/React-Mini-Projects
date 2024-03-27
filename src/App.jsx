import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homes from "./components/Homes";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homes></Homes>,
      children: [
        {
          index: true,
          element: <Products></Products>,
        },
        {
          path: "/cart",
          element: <Cart></Cart>,
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
