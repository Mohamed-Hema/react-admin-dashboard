import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "users",
      element: <Users />,
    },
    {
      path: "products",
      element: <Products />,
    },
  ]);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Route path="/" element={<Home />} />
    </div>
  );
}

export default App;
